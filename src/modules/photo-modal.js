import React from 'react';

class PhotoModal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: ""
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
				<img src={this.props.photo.url} />
				<p ref="description">{this.state.description}</p>
				<input onChange={this.onChangeDescription} ref="editDescription" />
				<a href="#">Edit Description</a>
			</div>
		);
	}
}

export default PhotoModal;