import React from 'react';
import ThumbnailRow from './thumbnail-row';

class Thumbnails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			photos: props.photos,
			rows: props.rows,
			cols: props.cols,
			total: props.total,
		};
	}

	getRowPhotos(i){
		let rowIndex = i * this.state.rows;
		let rowPhotos = this.state.photos.slice(rowIndex, rowIndex + this.state.rows);
		return rowPhotos;
	}

	render(){
		let rows = [];
		for(let i = 0; i < this.state.rows; i++){
			rows.push(<ThumbnailRow
				className='thumbnailRow'
				key={i}
				rowIndex={i}
				cols={this.state.cols}
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