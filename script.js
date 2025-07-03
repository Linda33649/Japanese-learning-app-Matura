
function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)]
}
const answerButtons = ["Answer1", "Answer2", "Answer3", "Answer4"]; //all answer buttons to select from
const correctButton = answerButtons[Math.floor(Math.random() * answerButtons.length)] //selects a random button to display the right answer
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


