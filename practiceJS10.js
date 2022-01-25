function removeNames(arr) {
	const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
  
  	for (let i = 0; i < unwantedNames.length; i++) {
    let arrIndex = arr.indexOf(unwantedNames[i]);
    	if (arrIndex > -1) {
      	arr.splice(arrIndex, 1);
      }
    }
  
  return arr;
}
