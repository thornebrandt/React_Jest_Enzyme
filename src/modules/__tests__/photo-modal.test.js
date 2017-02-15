import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import PhotoModal from '../photo-modal';
import fakePhotos from '../__data__/photos.fake';

describe("<PhotoModal />", () =>{
	let wrapper, instance;

	beforeAll(() => {
		class MockLocalStorage {
			constructor(){
				this.store = {};
			}

			clear(){
				this.store = {};
			}

			getItem(key){
				return this.store[key];
			}

			setItem(key, value){
				this.store[key] = value.toString();
			}
		}

		Object.defineProperty(window, 'localStorage', {
		  value: new MockLocalStorage(),
		});
	});

	beforeEach(() => {
		wrapper = mount(<PhotoModal photo={fakePhotos[0]} />);
		instance = wrapper.instance();
	});

	it('saves local storage', () => {
		window.localStorage.setItem('testLocalStorage', '123');
		expect(window.localStorage.getItem('testLocalStorage')).toBe('123');
	});

	it('accepts text into input', () => {
		let input = wrapper.ref('editDescription');
		input.node.value = 'abc';
		expect(input.node.value).toEqual('abc');
	});

	it('text input is reflected in display', () => {
		let input = wrapper.ref('editDescription');
		let display = wrapper.ref('description');
		input.simulate('change', { target: { value: 'abc' }});
		expect(display.text()).toEqual('abc');
	});

});