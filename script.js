
function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)]
}
let vowelAnswer = characterRandomizer(HiraganaVowels)

document.getElementById("VowelCharacter").textContent = vowelAnswer.char
document.getElementById("Test").textContent = vowelAnswer.romaji

