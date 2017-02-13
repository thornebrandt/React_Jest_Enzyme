import React from 'react';
import {mount, shallow} from 'enzyme';
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
		wrapper = shallow(
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
	      done();
	    } catch(e) {
	      done.fail(e);
	    }
	  }, 0);
	}

	it('populated photos to page', ()=> {
		expect(wrapper.find(ThumbnailRow)).toHaveLength(rows);
	});

	it('assigns the row index to the rows', () => {
		let firstRow = wrapper.find(ThumbnailRow).first();
		expect(firstRow.props().rowIndex).toBe(0);
	});


	it('state was populated with photos', (done) => {
		afterPromises(done, () => {
			expect(instance.state.photos.length).toEqual(numPhotos);
		});
	});

	it('matches snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

});