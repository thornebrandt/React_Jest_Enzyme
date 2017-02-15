class LocalStorageMock{
	constructor(){
		this.store = {};
	}

	clear() {
		this.store = {};
	}

	getItem(key){
		return this.store[key];
	}

	setItem(key, item){
		this.store[key] = item.toString();
	}
}

export default LocalStorageMock;