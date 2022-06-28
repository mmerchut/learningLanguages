const currentWord = document.querySelector(".current-word");
const currentWordEng = document.querySelector(".current-word-eng");
const checkWord = document.querySelector('.check');
const start = document.querySelector('.start');
const inputWord = document.querySelector("#word");
const switchLanguage = document.querySelector(".switch");
const words = document.querySelector(".words");
const conversation = document.querySelector(".conversation");
// let currentTF = 0;
let frenchB = true;
let randomWord = "";
let wordToLearn = "";
let wordtoLearnEng = "";
let xBoolean = "";


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
    "a",
    "ne",
    "les",
    "ce",
    "en",
    "on",
    "ca",
    "une"


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
    "Not",
    "Them",
    "This",
    "In",
    "We",
    "That",
    "A"
];


const frenchConversation = [
    "Bonjour",
    "Ca Va?",
    "Ca Va, Et toi?",
    "Ca Va. Au revoir",
    "Quoi de neuf?"
]

const englishConversation = [
    "Hello",
    "How are you doing?",
    "I'm fine, and you?",
    "I'm fine, see you",
    "What's up?",
]

// let myInterval = setTimeout(hideCurrentWord, 2000);

function getRandomWord() {
    
    if(frenchB == true) {
        randomWord = Math.floor(Math.random() * (20 - 1)) + 1;
    console.log(randomWord);
    wordToLearn = frenchWords[randomWord];
    wordtoLearnEng = englishWords[randomWord];
     console.log(wordToLearn)
     currentWord.textContent = wordToLearn;
     currentWordEng.textContent = wordtoLearnEng;
     
    

     
    }
    if(frenchB == false) {
    randomWord = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(randomWord);
    wordToLearn = englishWords[randomWord];
    wordtoLearnEng = frenchWords[randomWord];
     console.log(wordToLearn)
     currentWord.textContent = wordtoLearnEng;
     currentWordEng.textContent = wordToLearn;
     
     

    }
    
  }


let word = "test"

function hideCurrentWord() {
   console.log('hide current word')
   currentWord.style.display = "none";
}

function checkText() {
    console.log("check text 2")
    if(inputWord.value.toLowerCase() == wordToLearn) {
        currentWord.style.display = "inline-block";
        console.log('2');
        // inputWord.style.backGroundColor = "green"; ??
        getRandomWord();
        inputWord.value = '';
        console.log(wordToLearn);
        // setTimeout(hideCurrentWord, 2000); ??

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

function wordsTrue() {
    if(xBoolean == false);
    xBoolean = true;
    console.log(xBoolean);
    conversation.checked = false;
}

function conversationTrue() {
    xBoolean = false;
    console.log(xBoolean);
    words.checked = false;
}


inputWord.addEventListener("keyup", checkText);
start.addEventListener("click", getRandomWord);
switchLanguage.addEventListener("click", changeLanguage)
words.addEventListener("click", wordsTrue)
conversation.addEventListener("click", conversationTrue)
// checkWord.addEventListener('click', check);
