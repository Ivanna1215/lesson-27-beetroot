'use strict'

function sumInput() {
    let question;
    let arr = [];
    let summ = 0;
    for (let i = 0; ; i++) {
        question = +prompt('Input your number');
        if (!question) { break }
        arr.push(question)
        summ = summ + arr[i];
    }
    console.log('Summ', summ);
    console.log(arr);
    alert(`summ ${summ}`);
}

// Task 1

function camelize(str) {
let arr = str.split('-');
console.log(arr);
let partOne;
let partTwo;
let res;
for (let i = 1; i<arr.length;i++){
    partOne = arr[i][0].toUpperCase();
    partTwo = (arr[i].slice(1));
res = partOne + partTwo;
arr[i]= res;
}
console.log (arr);
let newStr = arr.join('');
console.log (newStr);
}
camelize ('hello-ivanna-how-are-you');

// let arr = ['ivanna','max']
// console.log (arr);
// let partOne;
// let partTwo;
// let res;
//    partOne = arr[0][0].toUpperCase();
//        console.log (partOne);
//        partTwo = arr[0].slice(1);
//        console.log (partTwo);
//        res = partOne + partTwo;
//        console.log (res);
   