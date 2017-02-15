import React from 'react';
import Thumbnail from './thumbnail';

class ThumbnailRow extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let thumbnails = [];
		for(let i = 0; i < this.props.photos.length; i++){
			thumbnails.push(<Thumbnail
				key={i}
				colIndex={i}
				rowIndex={this.props.rowIndex}
				photo={this.props.photos[i]}
			/>);
		}

		return (
			<div>
				{thumbnails}
			</div>
		);
	}
}
export default ThumbnailRow;