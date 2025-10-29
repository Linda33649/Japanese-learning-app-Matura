if (window.location.pathname.includes("CharacterLibrary.html")) {
  PageMode ? generateCharacters(Katakana) : generateCharacters(Hiragana); //passes on either "Katakana" or "Hiragana" depending on PageMode to call the respective object
}

function generateCharacters(mode) {
  const groups = Object.values(mode); //returns all group arrays stored in the object
  groups.forEach((group) =>
    group.length > 20
      ? null //excludes "All" and "Dakuten" group
      : generateHTML(group)
  );
}

function generateHTML(group) {
  const newP = document.createElement("p"); //source: MDN
  document.getElementById("LibraryContainer").appendChild(newP); //creates a p element for each group of characters and appends it to the container
  newP.classList.add("LibraryDisplay");

  group.forEach((character) => {
    const newSpan = document.createElement("span"); //creates a new span element inside the p element for each character object stored in the group array
    newP.appendChild(newSpan);
    newSpan.classList.add("libraryCharacters");
    newSpan.textContent +=
      "character: " + character.char + " romaji: " + character.romaji + " "; //displays the character and the respective translation
  });
}
