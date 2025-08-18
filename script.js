let vowelAnswer
let Answered = false
let previousChar = localStorage.getItem("previousChar")
let QuestionCount = Number(localStorage.getItem("QuestionCount")) || 0; //makes sure QuestionCount is always a number and defaults to 0 if localStorage returns undefined
let QuizGroups = localStorage.getItem("QuizGroup")
QuizGroups = JSON.parse(QuizGroups)

function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)]
}
const answerButtons = ["Answer1", "Answer2", "Answer3", "Answer4"]; //all answer buttons to select from
const correctButton = characterRandomizer(answerButtons) //selects a random button to display the right answer

do {
    vowelAnswer = characterRandomizer(QuizGroups)
} while (previousChar === vowelAnswer.char)
previousChar = vowelAnswer.char
localStorage.setItem("previousChar", previousChar)


document.getElementById("VowelCharacter").textContent = vowelAnswer.char //displays a random character of the chosen group
const displayedAnswers = [vowelAnswer.romaji]

answerButtons.forEach(buttonId => { //goes through all buttons and gives them an answer
    if (buttonId === correctButton) {
        document.getElementById(correctButton).textContent = vowelAnswer.romaji
    } else {
        let wrongAnswer;
        do {
            wrongAnswer = characterRandomizer(QuizGroups).romaji
        }
        while (displayedAnswers.includes(wrongAnswer)); //lets do run as long as the answer is already displayed
        document.getElementById(buttonId).textContent = wrongAnswer
        displayedAnswers.push(wrongAnswer) //stores already displayed answers
    }
});

answerButtons.forEach(buttonId => {
    document.getElementById(buttonId).addEventListener("click", function (event) {
        if (!Answered) {
            Answered = true
            checkAnswer(event)
            QuestionCount++ 
            localStorage.setItem("QuestionCount",QuestionCount)
        } else {
            location.reload()
        }
        event.stopPropagation() //stops the click from triggering the 2nd listener right away
    })
})

document.addEventListener("click", function () {
    if (Answered) {
        location.reload()
        Answered = false
    }
})

function checkAnswer(event) {
    if (event.target.id === correctButton) {
        event.target.classList.add("correct")
    }
    else {
        event.target.classList.add("wrong")
        document.getElementById(correctButton).classList.add("correct")
    }
}

if (QuestionCount===10){
    localStorage.removeItem("QuestionCount")
    window.location.href = "index.html"
}


