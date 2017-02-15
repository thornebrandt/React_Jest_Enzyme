import React from 'react';

class PhotoModal extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			description: ""
		}
		console.log(props);
	}

	render(){
		return(
			<div>
				<img src={this.props.photo.url} />
				<p>{this.state.description}</p>
				<input ref="editDescription" />
				<a href="#">Edit Description</a>
			</div>
		);
	}
}

export default PhotoModal;