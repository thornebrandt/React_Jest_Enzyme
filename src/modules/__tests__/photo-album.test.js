import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import PhotoAlbum from '../photo-album';
import fakePhotos from '../__data__/photos.fake.js';


describe('<PhotoAlbum />', () => {
	let photoAlbum,
	fakePromise,
	wrapper,
	fakePromiseResolve,
	fakeResponse,
	sandbox,
	chancee,
	numPhotos;
	const rows = 3;
	const cols = 3;

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
		wrapper = shallow(<PhotoAlbum rows={rows} cols={cols}	 />);
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
		photoAlbum.componentDidMount();
	});


	it('fetch was called', () => {
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/photos", {});
	});


	it("state was populated with photos", (done) => {
		numPhotos = cols * rows;
		afterPromises(done, () => {
			expect(photoAlbum.state.photos.length).toEqual(numPhotos);
			expect(photoAlbum.state.photos).toEqual(fakePhotos);
		});
		fakePromiseResolve(fakeResponse);
	});

	it('matches snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});


});

