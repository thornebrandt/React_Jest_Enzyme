import React from 'react';
import ThumbnailRow from './thumbnail-row';

class Thumbnails extends React.Component{
	constructor(props){
		super(props);
	}

	getRowPhotos(i){
		let rowIndex = i * this.props.rows;
		let rowPhotos = this.props.photos.slice(rowIndex, rowIndex + this.props.rows);
		return rowPhotos;
	}

	render(){
		let rows = [];
		for(let i = 0; i < this.props.rows; i++){
			rows.push(<ThumbnailRow
				className='thumbnailRow'
				key={i}
				rowIndex={i}
				cols={this.props.cols}
				photos={this.getRowPhotos(i)}
			/>);
		}
		return (
			<div>
				{rows}
			</div>
		);
	}
}

export default Thumbnails;