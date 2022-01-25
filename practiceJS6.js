function getNumbers(arr) {
	for (let item of arr) {
    let found = String(item);
  	if(found.indexOf(1, 0) != -1 || found.indexOf(2, 0) != -1 || found.indexOf(5, 0) != -1) {
      alert(item);
    }
  }
 
}

getNumbers([10, 20, 30, 50, 235, 3000]);
