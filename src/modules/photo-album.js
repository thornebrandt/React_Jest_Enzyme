import 'whatwg-fetch';
const React = require('react');
const ReactDOM = require('react-dom');
const Thumbnails = require('./thumbnails');

class PhotoAlbum extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			photos: []
		}
	}

	componentDidMount(){
		this.loadData();
	}

	parsePhotos(data){
		this.setState({ photos: data.slice(0, 24) });
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
				<Thumbnails photos={this.state.photos} />
			</div>
		);
	}
}

export default PhotoAlbum;