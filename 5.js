//  Завдання 1      ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// function Tags(titileOfTag, action, attrs) {
//     this.titileOfTag = titileOfTag || 'No Title'
//     this.action = action || 'No Action'
//     this.attrs = attrs || [];
// }

// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.'   
// let atribut= [ 
// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'},
// {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами'},
// ]
// let a = new Tags (title,action,atribut);
// console.log(a)

// let title = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.'   
// let atribut= [ 
// {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ]
// let a = new Tags (title,action,atribut);
// console.log(a)

// let title = '<h1>';
// let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.'   
// let atribut= [ 
    // {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
    // ]
    // let a = new Tags (title,action,atribut);
    // console.log(a)
    
    
    // Завдання 2
    // -  Створити класс  для об'єкту який описує теги
    // Властивості
    //  -назва тегу
    //  - опис його дій
    //  - масив з атрибутами (2-3 атрибути максимум)
    //  Кожен атрибут описати як окремий який буде містити
    //  -назву атрибуту
    //  -опис дії атрибуту
    //  інформацію брати з htmlbook.ru
    
// class Tag{ constructor (titileOfTag, action, attrs)
//  {
//     this.titileOfTag = titileOfTag || 'No Title'
//     this.action = action || 'No Action'
//     this.attrs = attrs || [];
// }}

// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.'   
// let atribut= [ 
// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти'},
// {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами'},
// ]
// let a = new Tag (title,action,atribut);
// console.log(a)

// Завдання 3
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let Car = {
//     model: 'Porshe',
//     old: 2020,
//     producer: 'Germany',
//     maxSpeed: 420,
//     volume: 5,

//     drive: function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function(){
//         console.log( {model: 'Porshe',
//         old: 2020,
//         producer: 'Germany',
//         maxSpeed: 420,
//         volume: 5});
//     },
//     increaseMaxSpeed: function(){
//         console.log(this.maxSpeed + 80);
//     },
//     changeYear: function(){
//         console.log(`новий рік випуску: ${this.old + 5}`);
//     },
//     addDriver: function(){
//         console.log({name: 'Valera', old: 33, expr: '5 years'})
//     }
// }

// Car.drive();
// Car.info();
// Car.increaseMaxSpeed();
// Car.changeYear();
// Car.addDriver();


// Завдання 4
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(driver) {
//         this.model = 'Porshe';
//         this.old = 2020;
//         this.producer = 'Germany';
//         this.maxSpeed = 420;
//         this.volume = 5;
//         this.increaseMaxSpeed = '50';
//         this.drive = function(){
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }}

//         this.increaseSpeed = function (){
//               console.log(+this.maxSpeed + +this.increaseMaxSpeed);
//           }
//           this.newValue = newValue;
//           this.changeYear = function() {
//               console.log(+this.old + +this.newValue);
//           }
//           this.driver = driver;
// }

// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// let speed = new Car('200');
// speed.drive();

// // -- info () - яка виводить всю інформацію про автомобіль
// let inform = new Car('Porshe', '2020', 'Germany', '420', '5 liters');
// console.log(inform)

// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// let speed = new Car('200', '40');
// speed.increaseSpeed();

// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// let year = new Car(15, 3);
// year.changeYear();

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let driver = new Car({name: 'Valera', old: 33, expr: '5 years'});
// console.log(driver);

// Завдання 5
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// class Prince{
//     constructor(nameP, ageP, footP){
//         this.nameP = nameP;
//         this.ageP = ageP;
//         this.footP = footP;
//     }
// }
// let Pr = new Prince ('Sergey', 25, 40)

// class Cinderella {
//     constructor(name, age, foot){
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
//     married(){
//         if(this.foot===Pr.footP){
//             console.log(this)
//         }
//     }   
// }
// let girl1 = new Cinderella('Nastya', 20, 37)
// girl1.married()
// let girl2 = new Cinderella('Olya', 30, 36)
// girl2.married()
// let girl3 = new Cinderella('Vika', 21, 40)
// girl3.married()
// let girl4 = new Cinderella('Ira', 40, 39)
// girl4.married()
// let girl5 = new Cinderella('Anna', 18, 35)
// girl5.married()

