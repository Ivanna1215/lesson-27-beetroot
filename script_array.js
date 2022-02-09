'use strict'

// Task2

// let check_store = [
//     { name: 'meat', amount: 2, price: 120 },
//     { name: 'milk', amount: 1, price: 30 },
//     { name: 'orange', amount: 2, price: 30 },
//     { name: 'pear', amount: 2, price: 50 },
// ]
// console.log(check_store);
// function check(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`Name ${array[i].name} amount ${array[i].amount} price ${array[i].price}`);
//     }
// }
// check(check_store);

// function summCheck(array) {
//     let summ = 0;
//     for (let i = 0; i < array.length; i++) {
//         summ = summ + array[i].amount * array[i].price;

//     }
//     console.log(`Summ is ${summ}`);
//     return summ;
// }
// summCheck(check_store);

// function dearBuy(array) {
//     let maxBye = array[0].amount * array[0].price;
//     let maxName = array[0].name;
//     for (let i = 1; i < array.length; i++) {
//         if (maxBye < array[i].amount * array[i].price) {
//             maxBye = array[i].amount * array[i].price;
//             maxName = array[i].name;
//         }
//         console.log(`MaxBye ${maxBye},it is ${maxName}`)
//     }
// }
// dearBuy(check_store);

// function middleCost (array) {
//     let cost =  summCheck(check_store)/array.length;
//     console.log (`Middle cost is ${cost}`);
// }
// middleCost (check_store);

// Task 4

// let room = [
//     { name: 'chemistry', number: 20, faculty: 'nutritionist', },
//     { name: 'biology', number: 15, faculty: 'pharmacist', },
//     { name: 'philosophy', number: 17, faculty: 'biochemist', },
// ];
// let group = {
//     name: 'B-318', amountStudents: 14, faculty: 'pharmacist',
// }

// function showRoom(obj) {
//     for (let i = 0; i < obj.length; i++) {
//         console.log(`Room is ${obj[i].name}`)
//     }
// }
// showRoom(room);

// function roomForfaculty(arr, faculty) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].faculty === faculty) {
//             console.log(`room for students ${faculty} is ${arr[i].name} `)
//         }
//     }
// }
// roomForfaculty(room, 'biochemist');

// function showNameroom( arr,obj) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].number >= obj.amountStudents && arr[i].faculty === obj.faculty) {
//             console.log(`room for students this group it is ${arr[i].name}`);
//         } 

//         else (console.log ('Error'));

//     }

// }
// showNameroom (room,group);


// console.log (room);
// console.log (room.sort ((a,b)=>a.number-b.number));

// console.log (room.sort ((a,b)=>a.name-b.name));

// console.log (room.sort());

// Task 1

let listBuy = [
    { name: 'milk', amount: 2, status: 'notBuy' },
    { name: 'coffee', amount: 1, status: 'notBuy' },
    { name: 'meat', amount: 2, status: 'notBuy' },
    { name: 'apple', amount: 1, status: 'notBuy' },
    { name: 'cheese', amount: 2, status: 'notBuy' },
]
// console.log(listBuy)

let newObj = {
    name: 'sweets', amount: 2, status: 'notBuy',
}

let newObjTwo = {
    name: 'apple', amount: 1, status: 'notBuy',
}

function addBuy (obj,array){
    for (let i = 1; i<array.length; i++) {
        if (array[i].name===obj.name) {
            // array[i].amount = array[i].amount + obj.amount;
            array[i].amount++;
            return
        }
    }
    console.log (listBuy);
}
addBuy (newObjTwo,listBuy)
// let happyNum = [1, 2, 3, 9, 11, 22, 33,];


// Learn.js 
// Task1
let fruits = ['apple','orange','peach','cherry'];
let shoppingCart = fruits;
shoppingCart.push('Banana');
// console.log(fruits);

// Task2
let room = ['bedroom','kitchen'];
// console.log (room);
room.push('bathroom');
// console.log (room);
room [Math.floor((room.length-1)/2)] = 'dining room';
// room[1] = 'dining room';
// console.log (room);
// console.log (room.shift());
room.unshift ('living room','hall');
// console.log (room);

// Task 3

let arr = ['a','b'];
arr.push (function(){
    console.log (this);
})
// console.log (arr[2]);






