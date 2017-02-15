import React from 'react';
import ThumbnailRow from '../thumbnail-row'
import Thumbnail from '../thumbnail';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import fakePhotos from '../__data__/photos.fake.js';

describe("<ThumbnailRow />", () => {
	let wrapper, instance;
	let cols = 3;
	let rowIndex = 1;

	beforeEach(() => {
		const photosSubSet = fakePhotos.slice(0, cols);
		wrapper = shallow(
			<ThumbnailRow
				rowIndex={rowIndex}
				cols={cols}
				photos={photosSubSet}
			/>
		);
		instance = wrapper.instance();
	});

	it("populated thumbnails on page", () => {
		expect(wrapper.find(Thumbnail)).toHaveLength(cols);
	});

	it('assigns the thumbnails with correct column index', () => {
		let secondThumb = wrapper.find(Thumbnail).at(1);
		expect(secondThumb.props().colIndex).toBe(1);
	});

	it('state was populated with row index', () => {
		expect(instance.props.rowIndex).toEqual(rowIndex);
	});

	it('assigns the thumbnails the correct photo', () => {
		let secondThumb = wrapper.find(Thumbnail).at(1);
		expect(secondThumb.props().photo).toEqual(fakePhotos[1]);
	});

	it('matches snaptshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});


});