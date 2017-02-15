import React from 'react';
import Portal from 'react-portal';

class Thumbnail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			thumbnail: props.photo.thumbnailUrl
		}
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.refs.portal.openPortal();
	}

	render(){
		const inline = {
			display: "inline-block"
		}


		return(
			<div style={inline}>
				<img onClick={this.onClick} src={this.state.thumbnail} />
				<Portal ref="portal" >
					<div>
						howdy
					</div>
				</Portal>
			</div>
		);
	}
};

export default Thumbnail;