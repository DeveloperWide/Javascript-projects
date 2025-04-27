let randomNumber = Math.floor(Math.random() * 100 + 1);
let input = document.querySelector("input");
let btn = document.querySelector(".submit")
let userNumber = null;
let hint = document.querySelector(".hint");
let numberOfGuesses = document.querySelector(".guess");
let guessedNumber = document.querySelector(".guessed");
console.log(randomNumber)
let i = 0;
btn.addEventListener("click" , () => {
    if(input.value.trim() != ""){
        i++;
        userNumber = input.value;
        guessedNumber.innerText = "Guessed Number is : " + userNumber;
        numberOfGuesses.innerText = "No. of guesses: " + i;
         if(userNumber == randomNumber){
            hint.innerText = "You won The Game";
            i = 0
         }else if(userNumber > randomNumber){
            hint.innerText = "Your Guess is too high"
         }else if(userNumber < randomNumber){
            hint.innerText = "Your Guess is too low"
         }
    }else{
        alert("Please Enter a valid Number")
    }
})