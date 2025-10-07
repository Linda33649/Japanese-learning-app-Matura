//console.log("Hiragana before PageSwitch:", Hiragana);
let PageMode = localStorage.getItem("PageMode") === "true"; //checks whether the output string is exactly "true". If yes it becomes true and if not it becomes false

document.getElementById("modeSwitch").addEventListener("click", function () {
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
  this.document.getElementById("modeSwitch").textContent = PageMode ? "Switch to Hiragana" : "Switch to Katakana" //Ensures that the right text is on the button even after the page is reloaded
};

function PageSwitch() {
  document.querySelectorAll(".LearningButton").forEach((btn) => {
    updateButton(btn.id);
  });
}

function updateButton(QuizName) {
  const button = document.getElementById(QuizName);

  const span = button.querySelector(".DisplayChar");
  span.textContent = sampleCharacter(QuizName);

  let ModePrefix = PageMode ? "K" : "H";

  const progressDisplay = button.querySelector(".progress");
  const progressNumber = localStorage.getItem(QuizName + ModePrefix + "Progress") || 0;
  const totalProgress = Number(localStorage.getItem("overallProgress")) || 0;
  const totalProgressRounded = Math.round(totalProgress * 10)/10 || 0;
  console.log(progressNumber)
  progressDisplay.textContent = progressNumber + "%"
  document.querySelector(".progressText").textContent = "Total Progress: " + totalProgressRounded + "%";
  document.querySelector(".ProgressBar").style.width = totalProgress + "%"
}

function sampleCharacter(Name) {
  if (Name === "All") {
    return "全";
  } else {
    if (PageMode) {
      //console.log(Katakana[Name][0].char)
      return Katakana[Name][0].char;
    } else {
      //console.log(Hiragana[Name][0].char)
      return Hiragana[Name][0].char;
    }
  }
}