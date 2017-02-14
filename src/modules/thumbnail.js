import React from 'react';


class Thumbnail extends React.Component{
	constructor(props){
		super(props);
	}

	onClick(){
		console.log("onClick");
	}

	render(){
		return(
			<img
				src={this.props.thumbnail}
				onClick={this.onClick}
			/>
		);
	}
};

export default Thumbnail;