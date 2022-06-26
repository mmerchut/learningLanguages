const currentWord = document.querySelector(".current-word");
const checkWord = document.querySelector('.check');
const start = document.querySelector('.start');
const inputWord = document.querySelector("#word");
let randomWord = '';
let wordToLearn = "";

const frenchWords = [
    "je",
    "de",
    "est",
    "pas",
    "le",
    "vous",
    "la",
    "tu",
    "que",
    "un"

]

const englishWords = [
    "I",
    "Of",
    "Is",
    "Not",
    "The",
    "You",
    "The",
    "You",
    "That",
    "A"


]

function getRandomWord() {
    randomWord = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(randomWord);
    wordToLearn = frenchWords[randomWord];
     console.log(wordToLearn)
     currentWord.textContent = wordToLearn;
  }


let word = "test"

function checkText() {
    console.log("1")
    if(inputWord.value == wordToLearn) {

        console.log('2');

        getRandomWord()
        inputWord.value = '';
        console.log(wordToLearn)

    }
}

// function check() {
//     console.log("1")
//     if(inputWord.value == word) {

//         console.log('2');
//         // getRandomWord()
//         // console.log(wordToLearn)
//     }
    
// }


inputWord.addEventListener("keyup", checkText);
start.addEventListener("click", getRandomWord);
// checkWord.addEventListener('click', check);
