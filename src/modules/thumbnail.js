import React from 'react';
import Portal from 'react-portal';
import PhotoModal from './photo-modal';
import TWEEN from 'tween.js';

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

	onOpen(node){
		new TWEEN.Tween({ opacity: 0 })
			.to({ opacity: 1}, 300)
			.easing(TWEEN.Easing.Cubic.Out)
			.onUpdate(function(){
				node.style.opacity = this.opacity;
			})
			.start();
	}

	beforeClose(node, close){
		new TWEEN.Tween({ opacity: 1 })
			.to({ opacity: 0 }, 300)
			.easing(TWEEN.Easing.Cubic.In)
			.onUpdate(function(){
				node.style.opacity = this.opacity;
			})
			.onComplete(close)
			.start();
	}

	render(){
		function animate(time) {
			window.requestAnimationFrame(animate);
			TWEEN.update(time);
		}

		try{
			window.requestAnimationFrame(animate);
		}catch(e){
			console.log("no requestAnimationFrame");
		}

		return(
			<div className="thumbnail">
				<img onClick={this.onImgClick} src={this.state.thumbnail} />
				<Portal
					ref="portal"
					onOpen={this.onOpen}
					beforeClose={this.beforeClose}
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