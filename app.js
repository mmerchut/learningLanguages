const currentWord = document.querySelector(".current-word");
const checkWord = document.querySelector('.check');
const inputWord = document.querySelector("#word");

let word = "test"

function checkText() {

    console.log("work")
}

function check() {
    console.log("1")
    if(inputWord.value == word) {

        console.log('2');
    }
}


inputWord.addEventListener("keydown", checkText);

checkWord.addEventListener('click', check)
