if(window.location.pathname.includes("CharacterLibrary.html")){
    PageMode ? generateCharacters(Katakana) : generateCharacters(Hiragana)
}

function generateCharacters(mode){
    const groups = Object.values(mode)
    groups.forEach((group)=> group.length > 20 ? null :
        generateHTML(group)
    )
}

function generateHTML(group){
    const newP = document.createElement("p")
    document.getElementById("LibraryContainer").appendChild(newP)
    newP.classList.add("LibraryDisplay")

    group.forEach((character)=> {
        const newSpan = document.createElement("span")
        newP.appendChild(newSpan)
        newSpan.classList.add("libraryCharacters")
        newSpan.textContent += "character: " + character.char + " romaji: " + character.romaji + " "
    })
}