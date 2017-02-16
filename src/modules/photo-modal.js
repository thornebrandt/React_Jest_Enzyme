import React from 'react';

class PhotoModal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: this.checkForStoredDescription(props.photo.id),
			editClass: 'hidden',
			displayClass: ''
		}
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.editDescription = this.editDescription.bind(this);
		this.saveDescription = this.saveDescription.bind(this);
		this.cancelDescription = this.cancelDescription.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	checkForStoredDescription(id){
		let description;
		try{
			description = window.localStorage.getItem('photo_' + id);
		} catch(e){
			console.log("no localStorage");
		}
		return description ? description : '';
	}

	onChangeDescription(e){
		e.preventDefault();
		this.setState({
			description: e.target.value
		});
	}

	editDescription(e){
		e.preventDefault();
		this.setState({
			editClass: '',
			displayClass: 'hidden'
		});
	}

	saveDescription(e){
		e.preventDefault();
		this.setState({
			editClass: 'hidden',
			displayClass: ''
		});
		window.localStorage.setItem('photo_' + this.props.photo.id, this.state.description);
	}

	cancelDescription(e){
		e.preventDefault();
		this.setState({
			description: this.checkForStoredDescription(this.props.photo.id),
			editClass: 'hidden',
			displayClass: ''
		});
		this.refs.descriptionInput.value = "";
	}

	handleKeyPress(e){
		if(e.key === 'Enter'){
			this.setState({
				editClass: 'hidden',
				displayClass: ''
			});
			window.localStorage.setItem('photo_' + this.props.photo.id, this.state.description);
		}
	}

	render(){
		return(
			<div className="portal">
				<img ref="img" src={this.props.photo.url} />
				<p ref="showDescription" className={this.state.displayClass}>
					<span ref="description">
						{this.state.description}
					</span>
					<br />
					<a
						className="button"
						onClick={this.editDescription}
						ref="editBtn"
						href="#"
					>
						Edit Description
					</a>
				</p>
				<p ref="editDescription" className={this.state.editClass} >
					<input
						onChange={this.onChangeDescription}
						onKeyPress={this.handleKeyPress}
						ref="descriptionInput"
						value={this.state.description}
						placeholder="Add Photo Description"
					/>
					<br />
					<a
						className="button"
						onClick={this.saveDescription}
						ref="confirm"
						href="#"
					>
						Save
					</a>
					<a
						className="button"
						onClick={this.cancelDescription}
						ref="cancel"
						href="#"
					>
						Cancel
					</a>
				</p>
			</div>
		);
	}
}

export default PhotoModal;