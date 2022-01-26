function getNumber(arr1, arr2) {
	 return Math.abs(arr1.reduce((multiply, current) => multiply * current) - arr2.reduce((multiply, current) => multiply * current));
}
