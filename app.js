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
    "le"

]

const englishWords = [
    "I",
    "Of",
    "Is",
    "Not",
    "The"
]

function getRandomWord() {
    randomWord = Math.floor(Math.random() * (5 - 1)) + 1;
    console.log(randomWord);
    wordToLearn = frenchWords[randomWord];
     console.log(wordToLearn)
  }


let word = "test"

function checkText() {
    console.log("1")
    if(inputWord.value == wordToLearn) {

        console.log('2');

        getRandomWord()
        console.log(wordToLearn)

    }
}

function check() {
    console.log("1")
    if(inputWord.value == word) {

        console.log('2');
        // getRandomWord()
        // console.log(wordToLearn)
    }
    
}


inputWord.addEventListener("keydown", checkText);
start.addEventListener("click", getRandomWord);
checkWord.addEventListener('click', check);
