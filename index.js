'use strict';

function mergeSort(inputArr) {
	if (inputArr.length === 1) return inputArr;

	const leftArr = mergeSort(inputArr.slice(0, Math.ceil(inputArr.length / 2)));
	const rightArr = mergeSort(inputArr.slice(Math.ceil(inputArr.length / 2)));
	const sortedArr = [];

	while (leftArr.length && rightArr.length) {
		if (leftArr[0] < rightArr[0]) sortedArr.push(leftArr.shift());
		else sortedArr.push(rightArr.shift());
	}

	if (leftArr.length === 0) sortedArr.push(...rightArr);
	else sortedArr.push(...leftArr);

	return sortedArr;
}