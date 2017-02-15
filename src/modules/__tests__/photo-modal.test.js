import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import PhotoModal from '../photo-modal';
import fakePhotos from '../__data__/photos.fake';

describe("<PhotoModal />", () =>{
	let wrapper, instance;
	beforeEach(() => {
		wrapper = shallow(<PhotoModal photo={fakePhotos[0]} />);
		instance = wrapper.instance();
	});

	it('closes on click on parent', () => {
		wrapper.simulate('click');

	});

});