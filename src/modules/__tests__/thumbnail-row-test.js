import React from 'react';
import ThumbnailRow from '../thumbnail-row'
import Thumbnail from '../thumbnail';
import { shallow } from 'enzyme';
import fakePhotos from '../__data__/photos.fake.js';

describe("<ThumbnailRow />", () => {
	let wrapper, instance;
	let cols = 3;
	let rowIndex = 1;

	beforeEach(() => {
		wrapper = shallow(
			<ThumbnailRow
				rowIndex={rowIndex}
				cols={cols}
				photos={fakePhotos}
			/>
		);
		instance = wrapper.instance();
	});

	const afterPromises = (done, fn) => {
		setTimeout(() => {
			try{
				fn();
				done();
			} catch(e){
				done.fail(e);
			}
		}, 0);
	}


	it("populated thumbnails on page", () => {
		expect(wrapper.find(Thumbnail)).toHaveLength(cols);
	});

	it('state was populated with row index', (done) => {
		afterPromises(done, () => {
			console.log(instance.state);
			expect(instance.state.rowIndex).toEqual(rowIndex);
		});
	});




});