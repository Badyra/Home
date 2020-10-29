
/*  Завдання 1
присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

 
let hi=("Hello");
let study=("owu");
let com=("com");
let ua=("ua");
alert(hi);
alert(study);
alert(com);
alert(ua);
let one = (1);
let ten = (10);
let negativeNumber = (-999);
let serialNumber = (123);
const p = (3.14);
const randomConst = (2.7);
let age = (16);
let t = true;
let f = false;
console.log(t);
console.log(f);
document.write(one, ten, negativeNumber, serialNumber, p, randomConst, age);
*/

/*  Завдання 3
Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const name1 = ('Бадира');
const name2 = ('Павло');
const name3 = ('Сергійович');
const num1 = ('777');
const num2 = ('6996');
const num3 = ('47');
console.log(name1, name2, name3, num1, num2, num3);
document.write (name1, name2, name3, num1, num2, num3);
alert(name1);
alert(name2);
alert(name3);
alert(num1);
alert(num2);
alert(num3);
*/
 
/* завдання 4
при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write


let name1 = prompt("Введіть своє ім'я");
let name2 = prompt("Введіть своє батьківство");
let name3 = prompt("Введіть своє призвище");
console.log (name1);
console.log (name2);
console.log (name3);
alert(name1);
alert(name2);
alert(name3);
document.write(name1);
document.write(name2);
document.write(name3);
*/

/*  Завдання 5-6
 Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
let name1 = prompt("Введіть своє ім'я");
let name2 = prompt("Введіть своє батьківство");
let name3 = prompt("Введіть своє призвище");
let person = (name1 + name2 + name3)

let name11 = prompt("Введіть своє ім'я");
let name22 = prompt("Введіть своє батьківство");
let name33 = prompt("Введіть своє призвище");
let person2 = (name11 + name22 + name33)

let name111 = prompt("Введіть своє ім'я");
let name222 = prompt("Введіть своє батьківство");
let name333= prompt("Введіть своє призвище");
let person3 = (name111 + name222 + name333)

let name1111 = prompt("Введіть своє ім'я");
let name2222 = prompt("Введіть своє батьківство");
let name3333 = prompt("Введіть своє призвище");
let person4 = (name1111 + name2222 + name3333)

console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);

*/


/*  Завдання 7
- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let num1 = prompt('Numer 1');
let num2 = prompt('Numer 2');
let num3 = prompt('Numer 3');

console.log ( num1, num2, num3)

*/

/*  Завдання 8
при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let num1 = prompt('Numer 1');
let num2 = prompt('Numer 2');
let num3 = prompt('Numer 3');
let num4 = prompt('Numer 4');
let result = ((parseInt(num1))+(parseInt(num2))+(parseInt(num3))+parseInt(num4))

console.log(result);
*/


/*  Завдання 9
 при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let num1 = prompt('Numer 1');
let num2 = prompt('Numer 2');
let num3 = prompt('Numer 3');
let num4 = prompt('Numer 4');
let result = ((parseFloat(num1))+(parseFloat(num2))+(parseFloat(num3))+parseFloat(num4));

console.log(result);
*/

/*  Завдання 10
при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let num1 = prompt('Numer 1');
let num2 = prompt('Numer 2');
let num3 = prompt('Numer 3');
let num4 = prompt('Numer 4');
let result = ((math.round(num1))+(math.round(num2))+(math.round(num3))+math.round(num4));

console.log(result);
*/

/*   Завдання 12 
При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

let a = 100;
let b = 100
let c = true;
let d = undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
*/

/*  Завдання 13 
Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
 В одинаковых выражениях в задании не использовать два одинаковых оператора.
Каждое выражение вложить в свою переменную
   5 ? 6 -> true
    5 ? 6 -> false
    5 ? 6 -> false
    5 ? 6 -> false
    10 ? 10 -> true
    10 ? 10 -> true
    10 ? 10 -> false
    10 ? 10 -> false
    10 ? 10 -> false
    123 ? '123' -> false
    123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 === 6);
console.log(10 === 10);
console.log(10 >= 10);
console.log(10 !== 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(123 === '123');
console.log(123 !== '123');
*/

/* Доп. завдання 1
Три різних числа вводяться через prompt().
За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let num1 = prompt('Number1');
let num2 = prompt('Number2');
let num3 = prompt('Number3');

if(num1 > num2 && num1 > num3){if (num2 > num3){document.write(num1, num2, num3);}}
else {document.write ( num1, num3, num2);}

if(num2 > num1 && num2 > num3) {if (num1 > num3) {document.write(num2, num1, num3);}}
else {document.write( num2, num3, num1);}

if(num3 > num1 && num3 > num2){ if (num1 > num2){document.write(num3, num1, num2);}}
else {document.write(num3, num2, num1 );}

*/

/* Доп. завдання 2
Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.

let r = prompt('red')
let g = prompt('green')
let y = prompt('yellow')
let b = prompt('broke')
if (g){
    document.write("Рух");
}
else if(y){
    document.write("Почекай");
}
else if(r){
    document.write("Стій!");
}
else if(b){
    document.write("Випий каву")}

    */