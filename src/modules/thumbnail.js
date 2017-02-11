const React = require('react');
const ReactDOM = require('react-dom');

const Thumbnail = React.createClass({
	render(){
		return(
			<img src={this.props.thumbnail} />
		);
	}
});

module.exports = Thumbnail;