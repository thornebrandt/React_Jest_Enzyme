let photoArray = [];
for(let i = 0; i < 9; i++){
	let photoObj = {};
	photoObj.id = i;
	photoObj.url = "fakePhoto" + i;
	photoObj.thumbnailUrl = "thumbnail" + i;
	photoArray.push(photoObj);
}

export default photoArray;