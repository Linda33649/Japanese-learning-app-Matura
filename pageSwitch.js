let PageMode = localStorage.getItem("PageMode") === "true"; //checks whether the output string is exactly "true". If yes it becomes true, if not it becomes false (source: ChatGpt)

document.getElementById("modeSwitch").addEventListener("click", function () { //switches the page mode variable and button content when the button is clicked and starts the function chain for switching the quiz buttons
  if (PageMode == true) {
    PageMode = !PageMode;
    localStorage.setItem("PageMode", PageMode);
    PageSwitch();
    document.getElementById("modeSwitch").textContent = "Switch to Katakana";
  } else {
    PageMode = !PageMode;
    localStorage.setItem("PageMode", PageMode);
    document.getElementById("modeSwitch").textContent = "Switch to Hiragana";
    PageSwitch();
  }
});

window.onload = function () { 
  PageSwitch();
  this.document.getElementById("modeSwitch").textContent = PageMode
    ? "Switch to Hiragana"
    : "Switch to Katakana"; //Ensures that the right text is on the button even after the page is reloaded
};

function PageSwitch() {  //retrieves all quiz buttons and calls the next function for each button
  document.querySelectorAll(".LearningButton").forEach((btn) => {
    updateButton(btn.id);
  });
}

function updateButton(QuizName) { //retrieves the span element within the button and fills it with the correct character by calling the next function
  const button = document.getElementById(QuizName);

  const span = button.querySelector(".DisplayChar");
  span.textContent = sampleCharacter(QuizName);

  let ModePrefix = PageMode ? "K" : "H";

  const progressDisplay = button.querySelector(".progress"); //retrieves the progress display element within the button
  const progressNumber =
    localStorage.getItem(QuizName + ModePrefix + "Progress") || 0; //gets the respective group progress from localStorage by using the button id combined with the page mode prefix as a unique key
  const totalProgress = Number(localStorage.getItem("overallProgress")) || 0;
  const totalProgressRounded = Math.round(totalProgress * 10) / 10 || 0; //rounds the progress to one decimal place
  progressDisplay.textContent = progressNumber + "%";
  document.querySelector("#DashboardText").textContent =
    "Total Progress: " + totalProgressRounded + "%";
  document.querySelector("#DashboardProgress").style.width =
    totalProgress + "%";
}

function sampleCharacter(Name) { //uses the button id (the parameter) to retrieve the correct character 
  if (Name === "All") {
    return "全";
  } else {
    if (PageMode) {
      return Katakana[Name][0].char;
    } else {
      return Hiragana[Name][0].char;
    }
  }
}
