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

	render(){
		let rows = [];
		for(let i = 0; i < this.state.rows; i++){
			rows.push(<ThumbnailRow key={i} rowIndex={i} cols={this.state.cols} />);
		}
		return (
			<div>
				{rows}
			</div>
		);
	}
}

export default Thumbnails;