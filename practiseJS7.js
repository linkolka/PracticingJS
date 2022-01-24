let weight = [1, 3, 4, 5, 10];
let recommendation;

	for (let item of weight) {
	
    if (item < 4) {
    recommendation = 'Пора перекусить';
    }
    if (item >= 4 && item <= 5.5) {
    recommendation = 'Вес в норме';
    }
    if (item > 5.5) {
    recommendation = 'Пора на тренировку';
    }
    
  	console.log(recommendation);
	} 
