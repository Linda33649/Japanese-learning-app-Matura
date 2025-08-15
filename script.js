
function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)]
}
const answerButtons = ["Answer1", "Answer2", "Answer3", "Answer4"]; //all answer buttons to select from
const correctButton = characterRandomizer(answerButtons) //selects a random button to display the right answer
let vowelAnswer = characterRandomizer(HiraganaVowels)


document.getElementById("VowelCharacter").textContent = vowelAnswer.char //displays a random character of the chosen group
const displayedAnswers = [vowelAnswer.romaji]

answerButtons.forEach(buttonId => { //goes through all buttons and gives them an answer
    if (buttonId === correctButton) {
        document.getElementById(correctButton).textContent = vowelAnswer.romaji
    } else {
        let wrongAnswer;
        do {
            wrongAnswer = characterRandomizer(HiraganaVowels).romaji
        }
        while (displayedAnswers.includes(wrongAnswer)); //lets do run as long as the answer is already displayed
        document.getElementById(buttonId).textContent = wrongAnswer
        displayedAnswers.push(wrongAnswer) //stores already displayed answers
    }
});

let Answered = false

answerButtons.forEach(buttonId => {
    document.getElementById(buttonId).addEventListener("click", function(event) {
        if (!Answered) {
            Answered = true
            checkAnswer(event)
        } else {
            location.reload()
        }
        event.stopPropagation() //stops the click from triggering the 2nd listener right away
    })
})

document.addEventListener("click",function(){
    if(Answered){
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


