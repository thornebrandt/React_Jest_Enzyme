import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import Portal from 'react-portal';
import fakePhotos from '../__data__/photos.fake';
import toJson from 'enzyme-to-json';
import Thumbnail from '../thumbnail';


describe('<Thumbnail />', () => {
	let wrapper, instance;
	let onImgClickSpy, openPortalSpy;


	beforeEach(() => {
		onImgClickSpy = spy(Thumbnail.prototype, 'onImgClick');
		openPortalSpy = spy(Portal.prototype, 'openPortal');
		wrapper = mount(<Thumbnail photo={fakePhotos[0]} />);
		instance = wrapper.instance();
	});

	afterEach(() => {
		Thumbnail.prototype.onImgClick.restore();
		Portal.prototype.openPortal.restore();
	});

	it('responds to a click', () => {
		wrapper.find('img').simulate('click');
		expect(onImgClickSpy.calledOnce).toBe(true);
	});

	it('opens a portal on click', () => {
		wrapper.find('img').simulate('click');
		expect(openPortalSpy.calledOnce).toBe(true);
	});

	it('matches snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

});