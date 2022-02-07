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

let room = [
    { name: 'chemistry', number: 20, faculty: 'nutritionist', },
    { name: 'biology', number: 15, faculty: 'pharmacist', },
    { name: 'philosophy', number: 17, faculty: 'biochemist', },
];
let group = {
    name: 'B-318', amountStudents: 14, faculty: 'pharmacist',
}

function showRoom(obj) {
    for (let i = 0; i < obj.length; i++) {
        console.log(`Room is ${obj[i].name}`)
    }
}
showRoom(room);

function roomForfaculty(arr, faculty) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].faculty === faculty) {
            console.log(`room for students ${faculty} is ${arr[i].name} `)
        }
    }
}
roomForfaculty(room, 'biochemist');

function showNameroom( arr,obj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].number >= obj.amountStudents && arr[i].faculty === obj.faculty) {
            console.log(`room for students this group it is ${arr[i].name}`);
        } 

        else (console.log ('Error'));
       
    }

}
showNameroom (room,group);


console.log (room);
console.log (room.sort ((a,b)=>a.number-b.number));

// console.log (room.sort ((a,b)=>a.name-b.name));

// console.log (room.sort());