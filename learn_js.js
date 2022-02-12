'use strict'
let arr = [];
function sumInput() {
    let question;

    let summ = 0;
    for (let i = 0; ; i++) {
        question = +prompt('Input your number');
        if (!question) {break}
            arr.push(question)
            summ = summ + arr[i];
    }
   

    console.log('Summ', summ);
    console.log (arr);
    alert('Summ', arr.summ);

}

