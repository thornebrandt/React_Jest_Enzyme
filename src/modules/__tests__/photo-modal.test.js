import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import PhotoModal from '../photo-modal';
import fakePhotos from '../__data__/photos.fake';

describe("<PhotoModal />", () =>{
	let wrapper, instance;
	let photo = fakePhotos[0];
	let second_photo = fakePhotos[1];

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
		wrapper = mount(<PhotoModal photo={photo} />);
		instance = wrapper.instance();
	});

	afterEach(() => {
		window.localStorage.clear();
	});

	it('saves local storage', () => {
		window.localStorage.setItem('testLocalStorage', '123');
		expect(window.localStorage.getItem('testLocalStorage')).toBe('123');
	});

	it('hides the input on load', () => {
		expect(wrapper.ref('editDescription').hasClass('hidden')).toBe(true);
	});

	it('toggles to edit display when edit is clicked', () => {
		let display = wrapper.ref('showDescription');
		let edit = wrapper.ref('editDescription');
		expect(edit.hasClass('hidden')).toBe(true);
		expect(display.hasClass('hidden')).toBe(false);
		display.find('a').simulate('click');
		expect(display.hasClass('hidden')).toBe(true);
		expect(edit.hasClass('hidden')).toBe(false);
	});

	it('toggles to display when confirm is clicked', () => {
		let display = wrapper.ref('showDescription');
		let edit = wrapper.ref('editDescription');
		display.find('a').simulate('click');
		expect(display.hasClass('hidden')).toBe(true);
		expect(edit.hasClass('hidden')).toBe(false);
		wrapper.ref('confirm').simulate('click');
		expect(display.hasClass('hidden')).toBe(false);
		expect(edit.hasClass('hidden')).toBe(true);
	});

	it('accepts text into input', () => {
		let input = wrapper.ref('editDescription');
		input.node.value = 'abc';
		expect(input.node.value).toBe('abc');
	});

	it('text input is reflected in display', () => {
		let input = wrapper.ref('descriptionInput');
		let display = wrapper.ref('description');
		input.simulate('change', { target: { value: 'abc' }});
		expect(display.text()).toEqual('abc');
	});

	it('saves description to localstorage', () => {
		let changedValue = "I will change localStorage";
		let input = wrapper.ref('descriptionInput');
		let confirmButton = wrapper.ref('confirm');
		let photo_ref = "photo_" + photo.id;
		input.simulate('change', { target: { value: changedValue }});
		confirmButton.simulate('click');
		expect(window.localStorage.getItem(photo_ref)).toBe(changedValue);
	});

	it('displays description from localStorage', () => {
		let changedValue = "This value was pulled from localStorage";
		let photo_ref = "photo_" + photo.id;
		expect(window.localStorage.getItem(photo_ref)).toBe(undefined);
		expect(wrapper.ref('description').text()).toBe('');
		window.localStorage.setItem(photo_ref, changedValue);
		wrapper.unmount();
		wrapper.mount();
		expect(wrapper.ref('description').text()).toBe(changedValue);
	});

	it('does not save description for wrong photo', () => {
		let changedValue = "You should not see me";
		let photo_ref = "photo_" + photo.id;
		window.localStorage.setItem(photo_ref, changedValue);
		wrapper = mount(<PhotoModal photo={second_photo} />);
		expect(wrapper.ref('description').text()).toBe("");
	});

});