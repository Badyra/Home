/*Завдання 1
створити функцію яка виводить масив
*/
/*

function fun1(arr){
    console.log(arr)
}
fun1([1, 2, 3, 4, 5]);
*/

/* Завдання 2
- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function ca(length, min, max) {
	let array = [];
	for(let i = 0; i < length; i++){
		array.push(Math.floor(Math.random() *(max-min)+min))
	}
	return array;
}
const array1 = ca(10,10,100);
console.log(array1)
*/

/* Завдання 3 
- створити функцію яка приймає три числа та виводить та повертає найменьше.

function tree(a,b,c)
{
	let min = Math.min(a,b,c);
	console.log('Мінімальне число -', min)
	return min;
}
const min = tree(155,340,260)
*/

/* Завдання 4
- створити функцію яка приймає три числа та виводить та повертає найбільше.

function four(a,b,c)
{
	let max = Math.max(a,b,c);
	console.log('Максимальне число -', max)
	return max;
}
const max = four(777,340,260)
*/

/* Завдання 5
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function five(){
	let min = arguments[0];
	let max = arguments[0];
	for ( const item of arguments){
		if(item > max) max = item;
		if(item < min) min = item;
	}
	console.log('Максимальне число -', max);
	return min;	
}
const min = five (11,22,33,44,55);
console.log ('*****************');
console.log('Мінімальне число -',min)

*/

/* Завдання 6 
- створити функцію яка повертає найбільше число з масиву
const my = (six)=> {
	let max = six[0]
	for (const item of six) {
		if(max < item) max = item;
	
	}
	return max;
}

const six1 = my([11,22,33,44,55,66]);
console.log(six1)
*/

/* Завдання 7
- створити функцію яка повертає найменьше число з масиву

const my = (seven)=> {
	let min = seven[0]
	for (const item of seven) {
		if(min > item) min = item;
		
	}
	return min;
}

const seven1 = my([11,22,33,44,55,66]);
console.log(seven1)

*/ 
/* Завдання 8
- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function a(arr){
	let sum = 0;
	for (const it of arr){
		sum += it;
	}
	return sum;
}
const a1 = a([11,12,13,14,15,16]);
console.log(a1)

- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function a(arr){
	let sum = 0;
	for (const it of arr){
		sum += it;
	}
	return sum/arr.length;
}
const a1 = a([11,12,13,14,15,16]);
console.log(a1)

*/

/* Завдання 9
- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function ac(arr){
	return arr.length;
}
console.log(ac([{god:1},{dog:2},{car:3},{cat:4},{picture:123}]))
*/
/* Завдання 10
- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function funct (arr) {
	for (let elem of arr) {
		for(let elems in elem){
			result = String(elems);
			console.log(result)
		}
		
	}
	return result.length + 1;
}

console.log(funct([{god:1,jesus:0},{dog:2,wolf:3},{car:3,bike:0},{cat:4,mouse:2},{picture:123,davinci:1}]))

*/ 

/* Завдання 11

- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  Приклад
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]
  
 
 
  function split(arr1,arr2){
	  let result = [];
	  for ( let i = 0; i < arr1.length; i++ ){
		  result.push(arr1[i]+arr2[i]);
		}
		return result;
	}
	const split1 = split([1,2,3,4],[1,2,3,4]);
	console.log(split1)
	*/ 
	
	/* Завдання 12
	- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

	function func(arr1,arr2){
		let i = arr1.indexOf(arr2);
		let t = arr1[i];
		arr1[i] = arr1[i + 1];
		arr1[i + 1] = t;
		return arr1;
		
	}
	console.log(func([55,66,77,44,4], [12,13,14,15,16]))
	
	*/
	
	/* Завдання 13 
	- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
Приклад
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]


function func(arr){
	let zero = [];
	let number = [];
	for ( const item of arr){
			if(item === 0){
				zero.push(0);
			}else{number.push(item)}
		}
		return number.concat(zero)
	}
	
	console.log(func([1,0,6,0,3]))
	console.log(func([1,6,3,0,0]))
	console.log(func([1,2,3,4,0]))
	console.log(func([1,0,0,0]))
	console.log(func([0,0,1,0]))
	*/
	
	/* Завдання 14
	- Додає в боді блок з текстом "Hello owu"

	let div = document.createElement('div');
	let str = document.createElement('h1');
	let body = document.querySelector('body');
	body.appendChild(div);
	div.appendChild(str);
	
	function func (tx){
		str.innerText = tx;
	}
	func('Hello world!')
	
	*/

	/* Завдання 15
	- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

	
	function func (tp, tx){
		let str = document.createElement(tp);
		let body = document.querySelector('body');
		body.appendChild(str);
		str.innerText = tx;
	}
	func('h1','Hello world!')
	
	*/

	/* Завдання 16
	Створити функцію яка :

- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
Для кожної властивості створити всередені блока автомоблія свій блок

let arr = [
	{
        name: 'BMW',
        old: 1,
        model: '6-sereis',
        color: 'white',
        comfortable: true,
    },
    {
		name: 'Porshe',
        old: 0,
        model: 'Caynne',
        color: 'black',
        comfortable: true,
    },
    {
		name: 'Audi',
        old: 2,
        model: 'A7',
        color: 'white',
        comfortable: true,
    },
    {
		name: 'Mersedes-Benz',
        old: 4,
        model: 'gelenvagen',
        color: 'black',
        comfortable: true,
    },
    {
		name: 'DEO',
        old: 8,
        model: 'Lanos',
        color: 'green',
        comfortable: false,
	},
]

function list (arr1, tag){
	const block = document.getElementById(tag);
	const ul = document.createElement('ul');
	for (let i = 0; i < arr1.length; i++) {
		const user = arr1[i];
		const li = document.createElement('li');
		li.innerHTML = `${i} - &{user.name}`;
		ul.appendChild(li)
	}
	block.appendChild(ul)
}
list(arr,'list') 

*/

