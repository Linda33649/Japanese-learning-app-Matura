
function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)]
}
let vowelAnswer = characterRandomizer(HiraganaVowels)

document.getElementById("VowelCharacter").textContent = vowelAnswer.char
document.getElementById("CorrectAnswer").textContent = vowelAnswer.romaji
document.getElementById("WrongAnswer1").textContent = characterRandomizer(HiraganaVowels).romaji
document.getElementById("WrongAnswer2").textContent = characterRandomizer(HiraganaVowels).romaji
document.getElementById("WrongAnswer3").textContent = characterRandomizer(HiraganaVowels).romaji

