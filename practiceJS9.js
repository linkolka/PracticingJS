function getMultiple(arr) {
	let productPrimes = 1;
  
  for (let item of arr) {
  	productPrimes *= item;
  }
  
  return productPrimes;
}
