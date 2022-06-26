const currentWord = document.querySelector(".current-word");
const currentWordEng = document.querySelector(".current-word-eng");
const checkWord = document.querySelector('.check');
const start = document.querySelector('.start');
const inputWord = document.querySelector("#word");
const switchLanguage = document.querySelector(".switch");
// let currentTF = 0;
let frenchB = true;
let randomWord = "";
let wordToLearn = "";
let wordtoLearnEng = "";

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
    "un",
    "il",
    "et",
    "a"

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
    "A",
    "He",
    "And",
    "At",



];

// let myInterval = setTimeout(hideCurrentWord, 2000);

function getRandomWord() {
    if(frenchB == true) {
        randomWord = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(randomWord);
    wordToLearn = frenchWords[randomWord];
    wordtoLearnEng = englishWords[randomWord];
     console.log(wordToLearn)
     currentWord.textContent = wordToLearn;
     currentWordEng.textContent = wordtoLearnEng;

     setTimeout(hideCurrentWord, 2000)
    }
    if(frenchB == false) {
    randomWord = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(randomWord);
    wordToLearn = englishWords[randomWord];
    wordtoLearnEng = frenchWords[randomWord];
     console.log(wordToLearn)
     currentWord.textContent = wordtoLearnEng;
     currentWordEng.textContent = wordToLearn;

     setTimeout(hideCurrentWord, 2000)
    }
    
  }


let word = "test"

function hideCurrentWord() {
   console.log('1')
   currentWord.style.display = "none";
}

function checkText() {
    console.log("1")
    if(inputWord.value.toLowerCase() == wordToLearn) {
        currentWord.style.display = "inline-block";
        console.log('2');
        getRandomWord();
        inputWord.value = '';
        console.log(wordToLearn);

        

    }
}

function changeLanguage() {
    frenchB = !frenchB;
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
switchLanguage.addEventListener("click", changeLanguage)
// checkWord.addEventListener('click', check);
