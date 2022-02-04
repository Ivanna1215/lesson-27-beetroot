'use strict'
let check_store = [
{name:'meat',amount:2,price:120}, 
{name:'milk',amount:1,price:30},
{name:'orange',amount:2,price:30},
{name:'pear',amount:2,price:50},
]

function check (array){
for (let i = 0; i < array.length;i++){
    console.log(`Name ${array[i].name} amount ${array[i].amount} price ${array[i].price}`);
}
}
check(check_store);

function summCheck (array) {
    let summ = 0;
    for (let i = 0; i<array.length; i++) {
        summ =  summ + array[i].amount*array[i].price;
       
    }
    console.log (`Summ is ${summ}`);
    return summ;
}
summCheck (check_store);