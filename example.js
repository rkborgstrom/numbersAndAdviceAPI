const numberAPI = 'http://numbersapi.com/random/date'
const adviceAPI  = 'http://api.adviceslip.com/advice'
const galvanizeCORS = 'https://galvanize-cors.herokuapp.com/'
const button = document.querySelector('button')

function getNumbers(url,url){
    fetch(url1+url2)
        .then(res =>  {

        })
            .then(textData => {
                console.log(textData)
            })
}


function getadvice(url1,url3){
    fetch(url+url)
        .then(response => {
            return response.json()
        })
            .then(jsnData => {
                console.log(jsonData)
            })
}

button.addEventListener('click',() => {
    getAdvice(galvanizeCORS,adviceAPI)
    getNumber(galvanizeCORS,numberAPI)
})