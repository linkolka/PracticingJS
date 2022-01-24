function finalGrade(examGrade, projectQuantity) {
	let grade = 0;
  if (examGrade > 50 || projectQuantity >= 2) {
  	grade = 75;
  }
  if (examGrade > 75 || projectQuantity >= 5) {
  	grade = 90;
  }
  if (examGrade > 90 || projectQuantity > 10) {
  	grade = 100;
  }
  
  return grade;
}

 console.log(finalGrade(90, 11));
