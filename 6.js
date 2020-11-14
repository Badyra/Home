// - создать массив с 20 числами.
// let mas = [1,44,2,54,777,53,73,111111,23,4,564,902,34,670,34,32,13,15,10];

// -- при помощи метода sort и колбека  отсортировать массив.
// mas.sort (function(a,b){
    //     return a-b;
    // })
    // console.log(mas)
    
    // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
    // mas.sort (function(a,b){
        //     return b-a;
        // })
        // console.log(mas)
        
        
        // -- при помощи filter получить числа кратные 3
        
        //         let ret = mas.filter ( function(elem){
            //             if(elem % 3 === 0){
//                 return true
//             }else { return false}
//         })
// console.log(ret)

// -- при помощи filter получить числа кратные 10

    //     let ret1 = mas.filter ( function(elem){
    //             if(elem % 10 === 0){
        //                 return true
        //             }else { return false}
        //         })
        // console.log(ret1)



// -- перебрать (проитерировать) массив при помощи foreach(

//     let result = mas.forEach(function(elem){
//     console.log(elem);
// })


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let result = mas.map(function(elem){
//     return elem * 3;
// })
// console.log(result);

// - создать массив со словами на 15-20 элементов.
// let masiv = ['One','032','Brand','Pasha','Badyra','Owu','Class','Hacker','Ukraine','Lviv'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let sort = masiv.sort();
// console.log(sort)

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort = masiv.sort(function(a,b){
//     if(a>b){return-1}return 1
// })
// console.log(sort)

// -- отфильтровать слова длиной менее 4х символов
// let filter = masiv.filter(function(elem){
//     if(elem.length <= 4){
//         return true;
//     }
// })
// console.log(filter)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let result = masiv.map(function(elem){
//     return elem + '!'
// })
// console.log(result)

// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let result = users.sort(function(a,b){
//     if(a.age > b.age){
//         return 1
//     }return -1
// })
// console.log(result)


// // Cпадання
// let result = users.sort(function(a,b){
//     if(a.age > b.age){
//         return -1
//     }return 1
// })
// console.log(result)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         return 1
//     }return - 1
// })
// console.log(result)

// Cпадання

// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         return -1
//     }return 1
// })
// console.log(result)

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let result = users.sort(function(a,b){
//     if(a.name.length > b.name.length){
//         for(let i = 0; i < users.length; i++){
//             users[i].id = i+1;
//         }
//         return -1
//     }
//     return 1
// })
// console.log(result);

// - відсортувати його за індентифікатором

// let result1 = result.sort(function(a,b){
//     if(a.id > b.id){
//         return -1
//     }
//     return 1
// })
// console.log(result1);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculate(a, b, callback) { return callback(a,b)}
// let result = calculate(12,13, function(a,b){return a+b})
// console.log(result)

// -- наисать функцию калькулятора с 3мя числами и колбеком


// function calculate(a, b, c, callback) { return callback(a,b,c)}
// let result = calculate(12,13,5, function(a,b,c){return a+b+c})
// console.log(result)