import React from 'react';
import sinon from 'sinon';
import {shallow, mount, render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import PhotoAlbum from '../photo-album';

describe('<PhotoAlbum />', () => {
	let photoAlbum,
	fakePromise,
	fakePromiseResolve,
	fakeResponse,
	sandbox,
	chance;

	let fakePhotos = [
		{
		    "albumId": 1,
		    "id": 1,
		    "title": "fakePhoto1",
		    "url": "http://fakePhoto1",
		    "thumbnailUrl": "http://fakePhotoThumbnail1"
		},
		{
		    "albumId": 2,
		    "id": 2,
		    "title": "fakePhoto2",
		    "url": "http://fakePhoto2",
		    "thumbnailUrl": "http://fakePhotoThumbnail2"
		},
		{
		    "albumId": 3,
		    "id": 3,
		    "title": "fakePhoto3",
		    "url": "http://fakePhoto3",
		    "thumbnailUrl": "http://fakePhotoThumbnail3"
		}
	];

	const mockResponse = (status, statusText, response) => {
	  return new window.Response(response, {
	    status: status,
	    statusText: statusText,
	    headers: {
	      'Content-type': 'application/json'
	    }
	  });
	};

	const renderPhotoAlbum = function(){
		const wrapper = shallow(<PhotoAlbum />);
		photoAlbum = wrapper.instance();
	}

	const setupPromise = function(){
		return new Promise((resolve, reject) => {
			fakePromiseResolve = resolve;
		});
	}

	const itAsync = (description, func) => {
	    it(description, async (done) => {
	        try {
		    await func();
		    done();
	        } catch (err) {
		    done.fail(err);
	        }
	    });
	};

	const afterPromises = (done, fn) => {
	  setTimeout(() => {
	    try {
	      fn();
	      done();
	    } catch(e) {
	      done.fail(e);
	    }
	  }, 0);
	}


	beforeEach(() =>{
		renderPhotoAlbum();
		fakeResponse = mockResponse(200, 'OK', JSON.stringify(fakePhotos));
		fakePromise = setupPromise();
		global.fetch = jest.fn().mockImplementation(() => fakePromise);
		photoAlbum.setState = jest.fn();
		photoAlbum.componentDidMount();
	});


	it('fetch was called', () => {
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/photos", {});
	});


	it("set state was called", (done) => {
		afterPromises(done, () => {
			expect(photoAlbum.setState).toHaveBeenCalledTimes(1);
			expect(photoAlbum.setState).toHaveBeenCalledWith({ "photos" : fakePhotos });
		});
		fakePromiseResolve(fakeResponse);
	});

});

