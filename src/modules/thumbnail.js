import React from 'react';
import Portal from 'react-portal';
import PhotoModal from './photo-modal';

class Thumbnail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			thumbnail: props.photo.thumbnailUrl
		}
		this.onImgClick = this.onImgClick.bind(this);
		this.closePortal = this.closePortal.bind(this);
	}

	onImgClick(){
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

		return(
			<div style={{ display: "inline-block" }}>
				<img onClick={this.onImgClick} src={this.state.thumbnail} />
				<Portal
					ref="portal"
					closeOnEsc
					closeOnOutsideClick
				>
					<div style={portalBGStyle} onClick={this.closePortal}>
						<PhotoModal photo={this.props.photo} />
					</div>
				</Portal>
			</div>
		);
	}
};

export default Thumbnail;