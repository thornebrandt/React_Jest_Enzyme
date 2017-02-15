import React from 'react';

class PhotoModal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: ""
		}
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
				<img src={this.props.photo.url} />
				<p>{this.state.description}</p>
				<input ref="editDescription" />
				<a href="#">Edit Description</a>
			</div>
		);
	}
}

export default PhotoModal;