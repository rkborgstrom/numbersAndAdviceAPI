let apiYears = `http://numbersapi.com/random/year?json`
let apiAdvice = 'http://api.adviceslip.com/advice'

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const h2 = document.querySelector('h2');


fetch(apiYears)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        h1.textContent = data.number;
        p.textContent = data.text;
    });

fetch(apiAdvice)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        h2.textContent = data.slip.advice;

    });
