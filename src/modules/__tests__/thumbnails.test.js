import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Thumbnails from '../thumbnails';
import ThumbnailRow from '../thumbnail-row';
import fakePhotos from '../__data__/photos.fake.js';

describe('<Thumbnails />', () => {
	let wrapper,
	instance;
	let rows = 3;
	let cols = 3;
	let total = 9;
	let numPhotos;

	beforeEach(() => {
		numPhotos = cols * rows;
		wrapper = mount(
			<Thumbnails
				rows={rows}
				cols={cols}
				photos={fakePhotos}
				total={total}
			/>
		);
		instance = wrapper.instance();
	});

	const afterPromises = (done, fn) => {
	  setTimeout(() => {
	    try {
	      fn();
	      done();x
	    } catch(e) {
	      done.fail(e);
	    }
	  }, 0);
	}

	it('populated photos to page', ()=> {
		expect(wrapper.find(ThumbnailRow)).toHaveLength(rows);
	});

	it('state was populated with photos', (done) => {
		afterPromises(done, () => {
			expect(instance.state.photos.length).toEqual(numPhotos);
		});
	});

});