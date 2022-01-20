let first = +prompt('enter first number', 0);
let second = +prompt('enter second number', 0);

let result = first > second ? first + second :
							first == second ? 'числа одинаковые' :
              first * second;
alert(result);
