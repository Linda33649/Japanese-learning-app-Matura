let overallprogress = Number(localStorage.getItem("overallProgress")) || 0;
let QuizLength = Number(localStorage.getItem("QuizLength")) || 0;
let QuizName = localStorage.getItem("QuizName");
let PageModePrefix = PageMode ? "K" : "H"; //checks whether the page is in Hiragana or Katakana mode
let groupProgress =
  Number(localStorage.getItem(QuizName + PageModePrefix + "Progress")) || 0;

document.getElementById("endPage").addEventListener("click", function () {
  window.location.href = "index.html";
  localStorage.removeItem("correctAnswer");
  localStorage.removeItem("wrongAnswer");
});

if (window.location.pathname.includes("EndPage.html")) {
  document.getElementById("correct").textContent +=
    " " + correctAnswer + " questions";
  document.getElementById("wrong").textContent +=
    " " + wrongAnswer + " questions";

  groupProgress = calculateProgress();
  console.log("the progress is" + groupProgress);
  localStorage.setItem(QuizName + PageModePrefix + "Progress", groupProgress); //stores the group progress with the key for the respective group of characters and a prefix to determine whether it is the hiragana or katakana group
  calculateOverallProgress();
  console.log("overallProgress is" + localStorage.getItem("overallProgress"));
  document.querySelector("#EndBar").style.width = groupProgress + "%";
  document.querySelector("#EndText").textContent =
    "Group completed to " + groupProgress + "%";
}

function calculateProgress() {
  let progressIncrease = (correctAnswer / QuizLength) * 50;
  let penalty = (wrongAnswer / QuizLength) * 20;
  groupProgress = Math.min(100, groupProgress + progressIncrease - penalty);
  groupProgress = Math.max(0, groupProgress);
  return groupProgress;
}

function calculateOverallProgress() {
  const groups = Object.keys(Hiragana);
  const modes = ["K", "H"];
  let totalProgress = 0;
  let count = 0;

  groups.forEach((group) => {
    modes.forEach((mode) => {
      const key = group + mode + "Progress";
      const progress = Number(localStorage.getItem(key)) || 0;
      totalProgress += progress;
      count++;
    });
  });

  const calcProgress = count > 0 ? totalProgress / count : 0;
  localStorage.setItem("overallProgress", calcProgress);
}
