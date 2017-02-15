import React from 'react';

class PhotoModal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: "",
			editClass: 'hidden'
		}
		this.onChangeDescription = this.onChangeDescription.bind(this);
	}

	onChangeDescription(e){
		this.setState({
			description: e.target.value
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
				<p ref="showDescription">
					<span ref="description">
						{this.state.description}
					</span>
					<br />
					<a href="#">Edit Description</a>
				</p>
				<p ref="editDescription" className={this.state.editClass} >
					<input
						onChange={this.onChangeDescription}
						ref="descriptionInput"
					/>
					<br />
					<a ref="confirm" href="#">Save</a>
				</p>
			</div>
		);
	}
}

export default PhotoModal;