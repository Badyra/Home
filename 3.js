/* Завдання 1
-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу

let one = {
    dog:'Dax';
    human:'homosapiens';
    car: 'Porshe'
    house:777;
    book:'interesting'
}
   */
  
   /* Завдання 2
-- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів
let dog = [
    {name:'Dax', age:3},
    {name:'Banny', age:7},
{name:'Lucifer', age:666},
{name:'Monday', age:1},
{name:'Rob', age:10}
];

let human = [
    {name:'Andiy', age:35},
    {name:'Igor', age:42},
    {name:'Anna', age:21},
    {name:'Vanya', age:14},
    {name:'Sveta', age:17}
];
let car = [
    {name:'Porshe', age:2},
        {name:'Mersedes', age:0.5},
        {name:'BMW', age:0},
        {name:'Reno', age:2},
        {name:'Audi', age:1}
    ];
    
    
console.log(dog,human,car)
*/
   /* Завдання 3
   -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка
let obj = {
    house:true,
    driver={uber:false,bolt:true},
    toy=[1,2,'Barby'],
    table:'brown',
    bag:'O-bag'
}
*/
/* Завдання 4

Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни
Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users [7].status);
console.log(users [10].status);
console.log(users [9].name);
console.log(users [2].name);
console.log(users [6].age);
console.log(users [9].age);
console.log(users [4].age,users [4].name);
console.log(users [5].age,users [5].status);
*/ 

/* Завдання 4
-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
1- отримує текст з параграфа з id "content"
let el = document.getElementById('content');
console.log(el);
2- отримує текст з блоку з id "rules"

let el1 = document.getElementById('rules');
console.log(el1);

3- замініть текст параграфа з id 'content' на будь-який інший

let el = document.getElementById('content');
el.innerText= 'Hello World';

4- замініть текст параграфа з id 'rules' на будь-який інший

let el1 = document.getElementById('rules');
el1.innerText= 'Bye World';

5- змініть кожному елементу колір фону на червоний

let el = document.getElementById('content');
let el1 = document.getElementById('rules');
el.style.backgroundColor = 'red'
el1.style.backgroundColor = 'red'

6- змініть кожному елементу колір тексту на синій

let el = document.getElementById('content');
let el1 = document.getElementById('rules');
el.style.color = 'blue';
el1.style.color = 'blue';

7- отримати весь список класів елемента з id=rules і вивести їх в console.log

let el1 = document.getElementById('rules');
console.log(el1.className);

8- отримати всі елементи з класом fc_rules

let el3 = document.getElementsByClassName('fc_rules');
console.log(el3);

9- поміняти колір тексту у всіх елементів fc_rules на червоний


let el3 = document.getElementsByClassName('fc_rules');

 for(let element of el3){
    element.style.color = 'red';
 }


*/

