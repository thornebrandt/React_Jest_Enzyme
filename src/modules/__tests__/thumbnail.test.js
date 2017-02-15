import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import Portal from 'react-portal';
import fakePhotos from '../__data__/photos.fake';
import toJson from 'enzyme-to-json';
import Thumbnail from '../thumbnail';


describe('<Thumbnail />', () => {
	let wrapper, instance;
	let onClickSpy, openPortalSpy;


	beforeEach(() => {
		onClickSpy = spy(Thumbnail.prototype, 'onClick');
		openPortalSpy = spy(Portal.prototype, 'openPortal');
		wrapper = mount(<Thumbnail photo={fakePhotos[0]} />);
		instance = wrapper.instance();
	});

	afterEach(() => {
		Thumbnail.prototype.onClick.restore();
		Portal.prototype.openPortal.restore();
	});

	it('responds to a click', () => {
		wrapper.find('img').simulate('click');
		expect(onClickSpy.calledOnce).toBe(true);
	});

	it('opens a portal on click', () => {
		wrapper.find('img').simulate('click');
		expect(openPortalSpy.calledOnce).toBe(true);
	});

	it('matches snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

});