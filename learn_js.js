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
// camelize ('hello-ivanna-how-are-you');

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
   
// Task 2

function filterRange (arr,a,b) {
return arr.filter(item => (a<= item && item<=b));
}
// console.log(filterRange([1,2,3,9,11,21,22,23,31,32,33,41,42,43],9,21));

// Task 3

// function filterRangeinPlace (arr,a,b) {

// for (let i = 0; i<arr.length; i++) {
// if ()
// }

//  filterRangeinPlace([11,12,19,22,24,25,28,31],13,25);

// Task 4

function getSortArr () {
    let arr = [5,2,1,-10,8];
   return  arr.sort((a,b)=>b-a);
}
// console.log (getSortArr ());

// Task 5

function getSortNewArr () {
    let arr = ['HTML','Javascript','CSS'];
    // let newArr = arr.map((item)=>item);
    // console.log (newArr);
    // newArr.sort();
    // console.log (newArr);
return arr.slice().sort();

}
// getSortNewArr ();
// console.log (getSortNewArr());

// Task 6
 function transArrName () {
     let spoon = {name:'spoon',guarantee:14,};
     let knife = {name: 'knife',guarantee:20,};
     let fork = {name:'fork',guarantee:16,};
     let users = [spoon,knife,fork];
    //  for (let i = 0; i<users.length;i++){
    //      users[i]=users[i].name;
    //  }
    //  console.log (users);
    let newArr = users.map((item)=>item.name);
    console.log (newArr);
 }
 transArrName ();

//  Task 7

// function transObj () {
//     let bedroom = {name:'bedroom',which:'smoll',id:'1',};
//     let bathroom = {name:'bathroom',which:'wonderfull',id:'2',};
//     let kitchen = {name:'kitchen',which:'clear',id:'3',};
//     let flat = [bedroom,bathroom,kitchen];
// let newFlat = [];

// }

// task 8
function getSortguarantie () {
    let spoon = {name:'spoon',guarantee:14,};
     let knife = {name: 'knife',guarantee:20,};
     let fork = {name:'fork',guarantee:16,};
     let utensils = [spoon,knife,fork];
     return  utensils.sort((a,b)=>b.guarantee-a.guarantee);

}
console.log (getSortguarantie ());
