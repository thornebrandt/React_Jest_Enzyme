import React from 'react';
import Thumbnail from './thumbnail';

class ThumbnailRow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowIndex: props.rowIndex,
			cols: props.cols,
			photos: props.photos
		}
	}
	render(){
		let thumbnails = [];
		for(let i = 0; i < this.state.cols; i++){
			thumbnails.push(<Thumbnail
				key={i}
				colIndex={i}
				rowIndex={this.state.rowIndex}
				photo={this.state.photos[i]}
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