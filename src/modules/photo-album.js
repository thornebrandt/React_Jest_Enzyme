import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from './thumbnails';

class PhotoAlbum extends React.Component{
	constructor(props){
		super(props);
		let total = props.rows * props.cols;
		this.state = {
			photos: [],
			rows: props.rows,
			cols: props.cols,
			total: total
		}
	}

	componentDidMount(){
		this.loadData();
	}

	parsePhotos(data){
		this.setState({ photos: data.slice(0, this.state.total) });
	}

	loadData(){
		let url = "https://jsonplaceholder.typicode.com/photos";
		return fetch(url, {})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			this.parsePhotos(data);
		})
		.catch((error) => {
			console.log("error fetching ", error);
		});
	}

	render(){
		return (
			<div>
				<h1>Photo Album</h1>
				<Thumbnails
					photos={this.state.photos}
					rows={this.state.rows}
					cols={this.state.cols}
					total={this.state.total}
				/>
			</div>
		);
	}
}

export default PhotoAlbum;