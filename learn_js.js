'use strict'
let arr = [];
function sumInput() {
    let question;

    let summ = 0;
    for (let i = 1; ; i++) {
        question = +prompt('Input your number');
        if (!question) {break}
        else {
            arr.push(question)
        
    }
    }
    summ += question;

    сonsole.log('Summ', +summ);

}

