let vowelAnswer;
let tries = 0;
let Answered = false;
let previousChar = localStorage.getItem("previousChar");
let QuestionCount = Number(localStorage.getItem("QuestionCount")) || 0; //makes sure QuestionCount is always a number and defaults to 0 if localStorage returns undefined
let correctAnswer = Number(localStorage.getItem("correctAnswer")) || 0;
let wrongAnswer = Number(localStorage.getItem("wrongAnswer")) || 0;

document.addEventListener("DOMContentLoaded", () => {
  let QuizGroups = localStorage.getItem("QuizGroup");
  QuizGroups = JSON.parse(QuizGroups);
  //console.log(QuizGroups);
  //console.log(localStorage.getItem("QuizGroup"));

  function characterRandomizer(group) {
    return group[Math.floor(Math.random() * group.length)];
  }
  const answerButtons = ["Answer1", "Answer2", "Answer3", "Answer4"]; //all answer buttons to select from
  const correctButton = characterRandomizer(answerButtons); //selects a random button to display the right answer

  do {
    vowelAnswer = characterRandomizer(QuizGroups); //makes sure the same character is not displayed as the question twice in a row
    console.log(vowelAnswer);
    tries++;
    console.log(tries);
    if (tries > 20) break;
  } while (previousChar === vowelAnswer.char);
  previousChar = vowelAnswer.char;
  localStorage.setItem("previousChar", previousChar);

  document.getElementById("VowelCharacter").textContent = vowelAnswer.char; //displays a random character of the chosen group
  const displayedAnswers = [vowelAnswer.romaji];

  answerButtons.forEach((buttonId) => {
    //goes through all buttons and gives them an answer
    if (buttonId === correctButton) {
      document.getElementById(correctButton).textContent = vowelAnswer.romaji;
    } else {
      let wrongAnswer;
      tries = 0;
      do {
        wrongAnswer = characterRandomizer(QuizGroups).romaji;
        tries++;
        if (tries > 20) {
          wrongAnswer = null; //necessary for the Ya and Wa row since they only have 3 distinct answers 
          // to be displayed
          break;
        }
      } while (displayedAnswers.includes(wrongAnswer)); //lets do run as long as the answer is already displayed
      document.getElementById(buttonId).textContent = wrongAnswer;
      displayedAnswers.push(wrongAnswer); //stores already displayed answers
    }
  });

  answerButtons.forEach((buttonId) => {
    //adds a click event listener to each answer button and checks if a button has already been clicked e.g. the question has been aswered or not using the boolean Answered
    document
      .getElementById(buttonId)
      .addEventListener("click", function (event) {
        if (!Answered) {
          Answered = true;
          checkAnswer(event);
          QuestionCount++;
          localStorage.setItem("QuestionCount", QuestionCount); //adds the amount of answered questions to localStorage since the page reloads after every question
        } else {
          location.reload(); //makes sure that the page reloads on the second click since a second click on a button won't reach the document event listener due to the stopPropagation
        }
        event.stopPropagation(); //stops the click from triggering the 2nd listener right away
      });
  });

  document.addEventListener("click", function () {
    //reloads the page when the page is clicked after the question has been answered
    if (Answered) {
      location.reload();
      Answered = false;
    }
  });

  function checkAnswer(event) {
    //checks if the clicked button is the same as the one that was selected to display the correct answer on and then adds the corresponding class to color the button via css
    if (event.target.id === correctButton) {
      event.target.classList.add("correct");
      correctAnswer++;
      localStorage.setItem("correctAnswer", correctAnswer);
    } else {
      event.target.classList.add("wrong");
      document.getElementById(correctButton).classList.add("correct"); //colors the correct button in green even if the answer was wrong so the user is able to see the correct answer
      wrongAnswer++;
      localStorage.setItem("wrongAnswer", wrongAnswer);
    }
  }
  let QuizLength
  if (QuizGroups.length > 10) {
    QuizLength = 15;
  } else {
    QuizLength = 10;
  }
localStorage.setItem("QuizLength",QuizLength)

  if (QuestionCount === QuizLength) {
    //Ends the quiz using the variable that has the amount of answered questions stored and the variable that sets the length of the quiz depending on how many characters a quiz has
    localStorage.removeItem("QuestionCount");
    window.location.href = "EndPage.html";
  }
});
