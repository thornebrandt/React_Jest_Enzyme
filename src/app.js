import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Redirect, Router, Route, Link } from 'react-router';
import PhotoAlbum from './modules/photo-album';

class PageNotFound extends React.Component {
	render() {
		return (
			<div>
				<h1>Sorry, we couldn't find that route</h1>
			</div>
		);
	}
}
render(
	(
		<Router history={browserHistory}>
			<Route path="/photos" component={PhotoAlbum} />
			<Redirect from="/" to="/photos" />
			<Route path="*" component={PageNotFound} />
		</Router>
	),
	document.getElementById('main')
);

