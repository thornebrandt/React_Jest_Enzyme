import React from 'react';
import Portal from 'react-portal';
import PhotoModal from './photo-modal';

class Thumbnail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			thumbnail: props.photo.thumbnailUrl
		}
		this.onClick = this.onClick.bind(this);
		this.closePortal = this.closePortal.bind(this);
	}

	onClick(){
		this.refs.portal.openPortal();
	}

	closePortal(e){
		if(e.target === e.currentTarget){
			this.refs.portal.closePortal();
		}
	}

	render(){
		const portalBGStyle = {
			position: "absolute",
			top: "0px",
			left: "0px",
			background: "rgba(0, 0, 0, 0.5)",
			width: "100%",
			height: "100%",
		}

		const portalStyle = {
			position: "relative",
			margin: "10% auto 0 auto",
			width: "50%",
			minWidth: "300px",
			minHeight: "300px",
			textAlign : "center",
			background: "white",
			display: "block"

		}


		return(
			<div style={{ display: "inline-block" }}>
				<img onClick={this.onClick} src={this.state.thumbnail} />
				<Portal
					ref="portal"
					closeOnEsc
					closeOnOutsideClick
				>
					<PhotoModal photo={this.props.photo} />
				</Portal>
			</div>
		);
	}
};

export default Thumbnail;