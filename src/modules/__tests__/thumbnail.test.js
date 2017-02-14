import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Thumbnail from '../thumbnail';
import Portal from 'react-portal'

describe('<Thumbnail />', () => {
	let wrapper, instance;
	let onClickSpy;

	beforeEach(() => {
		onClickSpy = spy(Thumbnail.prototype, 'onClick');
		wrapper = shallow(<Thumbnail />);
		instance = wrapper.instance();
	});

	afterEach(() => {
		Thumbnail.prototype.onClick.restore();
	});

	it('responds to a click', () => {
		wrapper.simulate('click');
		expect(onClickSpy.calledOnce).toBe(true);
	});
});