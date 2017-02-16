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
		return(
			<div className="thumbnail">
				<img onClick={this.onImgClick} src={this.state.thumbnail} />
				<Portal
					ref="portal"
					closeOnEsc
					closeOnOutsideClick
				>
					<div ref="portalBG" className="portalBG" onClick={this.closePortal}>
						<PhotoModal ref="photoModal" photo={this.props.photo} />
					</div>
				</Portal>
			</div>
		);
	}
};

export default Thumbnail;