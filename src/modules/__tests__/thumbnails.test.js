import React from 'react';
import {mount, shallow} from 'enzyme';
import fakePhotos from '../__data__/photos.fake.js';
import toJson from 'enzyme-to-json';
import Thumbnails from '../thumbnails';
import ThumbnailRow from '../thumbnail-row';


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

	it('assigns appropriate photos to the rows', () => {
		let secondSetOfPhotos = [];
		for(let i = rows; i < rows + 3 && i < fakePhotos.length; i++){
			secondSetOfPhotos.push(fakePhotos[i]);
		}
		let secondRow = wrapper.find(ThumbnailRow).at(1);
		expect(secondRow.props().photos).toEqual(secondSetOfPhotos);
	});

	it('state was populated with photos', () => {
		expect(instance.props.photos.length).toEqual(numPhotos);
	});

	it('matches snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});





});