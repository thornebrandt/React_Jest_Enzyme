const React = require('react');
const ReactDOM = require('react-dom');
const Thumbnail = require('./thumbnail');

const Thumbnails = React.createClass({
	render(){
		let thumbnails = this.props.photos.map((photo) => {
			return <Thumbnail key={photo.id} thumbnail={photo.thumbnailUrl} />
		});

		return (
			<div>
				{ thumbnails }
			</div>
		);
	}
});

module.exports = Thumbnails;