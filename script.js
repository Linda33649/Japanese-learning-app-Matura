
function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)]
}
const answerButtons = ["Answer1", "Answer2", "Answer3", "Answer4" ];
const correctButton = answerButtons[Math.floor(Math.random() * answerButtons.length)]
let vowelAnswer = characterRandomizer(HiraganaVowels)


document.getElementById("VowelCharacter").textContent = vowelAnswer.char

answerButtons.forEach(buttonId => {
    if (buttonId === correctButton){
document.getElementById(correctButton).textContent = vowelAnswer.romaji
    } else{
        let wrongAnswer;
        do {
            wrongAnswer = characterRandomizer(HiraganaVowels).romaji
        }
     while (wrongAnswer === vowelAnswer.romaji)
        document.getElementById(buttonId).textContent = wrongAnswer
}})


