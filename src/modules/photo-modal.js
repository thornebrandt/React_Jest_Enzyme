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
		this.setState({
			description: e.target.value
		});
	}

	editDescription(e){
		this.setState({
			editClass: '',
			displayClass: 'hidden'
		});
	}

	saveDescription(e){
		this.setState({
			editClass: 'hidden',
			displayClass: ''
		});
		window.localStorage.setItem('photo_' + this.props.photo.id, this.state.description);
	}

	cancelDescription(e){
		this.setState({
			description: this.checkForStoredDescription(this.props.photo.id),
			editClass: 'hidden',
			displayClass: ''
		});
	}

	render(){
		const portalStyle = {
			position: "relative",
			margin: "5% auto 0 auto",
			width: "50%",
			minWidth: "300px",
			minHeight: "300px",
			textAlign : "center",
			background: "white",
			display: "block"

		}


		return(
			<div style={portalStyle}>
				<img ref="img" className={"hey"} src={this.props.photo.url} />
				<p ref="showDescription" className={this.state.displayClass}>
					<span ref="description">
						{this.state.description}
					</span>
					<br />
					<a onClick={this.editDescription} ref="editBtn" href="#">Edit Description</a>
				</p>
				<p ref="editDescription" className={this.state.editClass} >
					<input
						onChange={this.onChangeDescription}
						ref="descriptionInput"
					/>
					<br />
					<a onClick={this.saveDescription} ref="confirm" href="#">Save</a>
					<a onClick={this.cancelDescription} ref="cancel" href="#">Cancel</a>
				</p>
			</div>
		);
	}
}

export default PhotoModal;