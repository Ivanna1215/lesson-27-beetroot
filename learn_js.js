'use strict'
let arr = [];
function sumInput() {
    let question;

    let summ = 0;
    for (let i = 1; ; i++) {
        question = +prompt('Input your number');
        if (!question) {break}
            arr.push(question)
            summ = summ + question;
    }
   

    console.log('Summ', summ);
    alert ('Summ',summ);

}

