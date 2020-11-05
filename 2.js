/* Завдання 1
--створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу


let mas1 = [1,2,3,4,5];
let mas2 = ['a','b','c','d','e'];
let mas3 = [1,2,'a','b',true];

console.log(mas1,mas2,mas3);

-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
 
let maszero = [];

maszero[1]='Pasha';
maszero[2]=true;
maszero[3]=13;
maszero[4]=NaN;
maszero[5]='End';

console.log(maszero);
*/

/*Завдання 2 
За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for (let start = 0; start < 10; start++) {
       document.write('<div><b>Okten Web</b></div>')}

       */

/*Завдання 3
 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let start = 0; start < 10; start++) {
       document.write(`<div><b>Okten Web - ${start} </b></div>`)}

 */
/* Завдання 4
За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


let i = 0;
while (i<20) {
       document.write ('<div><h>Lviv</h></div>');
       i++;
}

*/

/*Завдання 5
За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 
let i = 0;
while (i<20) {
       document.write (`<div><b>Lviv - ${i} </b></div>`);
      i++;
}

*/


/*Завдання 6
Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


const chis = [1,2,3,4,5,6,7,8,9,10];
for(let ch = 0; ch < chis.length; ch++) {
       console.log (chis[ch]);
}

*/ 

/* Завдання 7
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


const chis = ['a','b','c','d','f','g','e','z','ы','я'];
for(let ch = 0; ch < chis.length; ch++) {
       console.log (chis[ch]);
}

*/ 

/* Завдання 7
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. (Використовувалося перше завдання, потрібно його розблокувати)

maszero.forEach(i=>{console.log(i);});

*/
/* Завдання 8-10
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let m = ['a','b',true,1,2,false,'qwerty',777];
for ( let i = 0; i < m.length; i++) {
       if(typeof m[i] === 'boolean'){console.log(m[i])}
       else{}
} 

let m = ['a','b',true,1,2,false,'qwerty',777];
for ( let i = 0; i < m.length; i++) {
       if(typeof m[i] === 'number'){console.log(m[i])}
       else{}
} 

let m = ['a','b',true,1,2,false,'qwerty',777];
for ( let i = 0; i < m.length; i++) {
       if(typeof m[i] === 'string'){console.log(m[i])}
       else{}
} 

*/

/* Завдання 11
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let maszero = [];

maszero[1]='Pasha';
maszero[2]=true;
maszero[3]=13;
maszero[4]=NaN;
maszero[5]='End';

for ( let i = 0 ; i < maszero.length; i++) {console.log (maszero[i])};
*/
/* Завдання 12 
Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) 
{console.log('Уот так уот',i)
document.write('Уот так уот',i )
};

*/
/* Завдання 13 
Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) 
{console.log('Уот так уот',i)
document.write('Уот так уот',i )
};

*/
/* Завдання 14 
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i=i+2) 
{console.log('Уот так уот',i)
document.write('Уот так уот',i )}

*/
/* Завдання 15
- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++)
{if (i%2 === 0) {
       console.log('Уот так уот',i)
       document.write('Уот так уот',i )}}
       
       */

/* Завдання 16
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++)
{if (i%2 === 1) {
       console.log('Уот так уот',i)
       document.write('Уот так уот',i )}}
     */
       
/* Завдання 17
Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let a = [ 'a', 'b', 'c'];
let str = "";
for ( let i = 0; i < a.length; i++)
{str = str + a[i]};
console.log(str);
*/

/* Завдання 18
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let a = [ 'a', 'b', 'c'];
let str = "";
let i = 0;
while ( i < a.length){
       str = str + a[i];
       i++;
}
console.log(str);
   */


/* Завдання 18
  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
  let a = [ 'a', 'b', 'c'];
  let str = "";
  for( const string of a){
         str= str + string;
       }
       console.log(str);
       */
      /* Завдання 18
       Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
       let a = [ 'a', 'b', 'c'];
       let str = "";
       for( const string in a){
              str= str + a[string];
       }
       console.log(str);
  */