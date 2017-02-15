import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';
import Portal from 'react-portal';
import fakePhotos from '../__data__/photos.fake';
import toJson from 'enzyme-to-json';
import Thumbnail from '../thumbnail';


describe('<Thumbnail />', () => {
	let wrapper, instance, cheerio;
	let onImgClickSpy, openPortalSpy, closePortalSpy;


	beforeEach(() => {
		onImgClickSpy = spy(Thumbnail.prototype, 'onImgClick');
		openPortalSpy = spy(Portal.prototype, 'openPortal');
		closePortalSpy = spy(Portal.prototype, 'closePortal');
		wrapper = mount(<Thumbnail photo={fakePhotos[0]} />);
		instance = wrapper.instance();
	});

	afterEach(() => {
		Thumbnail.prototype.onImgClick.restore();
		Portal.prototype.openPortal.restore();
		Portal.prototype.closePortal.restore();
	});

	it('responds to a click', () => {
		wrapper.find('img').simulate('click');
		expect(onImgClickSpy.calledOnce).toBe(true);
	});

	it('opens a portal on click', () => {
		expect(wrapper.ref('portalBG').length).toBe(0);
		wrapper.find('img').simulate('click');
		expect(openPortalSpy.calledOnce).toBe(true);
		expect(wrapper.ref('portalBG').length).toBe(1);
	});

	it('closes portal on bg click', () => {
		expect(wrapper.ref('portalBG').length).toBe(0);
		wrapper.find('img').simulate('click');
		expect(wrapper.ref('portalBG').length).toBe(1);
		wrapper.ref('portalBG').simulate('click');
		expect(closePortalSpy.calledOnce).toBe(true);
		expect(wrapper.ref('portalBG').length).toBe(0);
	});

	it('does not close portal on portal click', () => {
		expect(wrapper.ref('portalBG').length).toBe(0);
		wrapper.find('img').simulate('click');
		expect(wrapper.ref('portalBG').length).toBe(1);
		wrapper.ref('photoModal').simulate('click');
		expect(wrapper.ref('portalBG').length).toBe(1);
	});

	it('matches snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

});