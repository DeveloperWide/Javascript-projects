const getQuoteBtn = document.querySelector(".get-quote");
const quote = document.querySelector(".quote").childNodes[1];
const author = document.querySelector(".author").childNodes[1];

let apiKey = "/57LgnTmVcoCmS0S53oavQ==t6dL1blh8HqMxCPI";
let url = "https://api.api-ninjas.com/v1/quotes";


function getQuote() {
    fetch(url , {headers : {
        "X-Api-Key" : apiKey,
    }}).then((res) => {
        return res.json();
    }).then((data) => {
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;
    }).catch((er) => {
        alert(`Some Error Occurred`);
        console.log(er)
    })
}

getQuote();

getQuoteBtn.addEventListener("click" , () => {
    getQuote();
})