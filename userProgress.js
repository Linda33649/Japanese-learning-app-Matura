
let overallprogress = Number(localStorage.getItem("progress")) || 0;
let QuizLength = Number(localStorage.getItem("QuizLength")) || 0;
let QuizName = localStorage.getItem("QuizName")
let PageModePrefix = PageMode ? "K" : "H"; //checks whether the page is in Hiragana or Katakana mode
let groupProgress = Number(localStorage.getItem(QuizName + PageModePrefix + "Progress")) || 0;





document.getElementById("endPage").addEventListener("click", function () {
  window.location.href = "index.html";
  localStorage.removeItem("correctAnswer");
  localStorage.removeItem("wrongAnswer");
});

if (window.location.pathname === "/EndPage.html") {
  document.getElementById("correct").textContent +=
    " " + correctAnswer + " questions";
  document.getElementById("wrong").textContent +=
    " " + wrongAnswer + " questions";

groupProgress = calculateProgress()
console.log("the progress is"+ groupProgress)
localStorage.setItem(QuizName + PageModePrefix + "Progress",groupProgress) //stores the group progress with the key for the respective group of characters and a prefix to determine whether it is the hiragana or katakana group 
}


function calculateProgress(){
  let progressIncrease = (correctAnswer/QuizLength) * 50
  let penalty = (wrongAnswer/QuizLength) * 20
  groupProgress = Math.min(100,groupProgress + progressIncrease - penalty)
  groupProgress = Math.max(0, groupProgress)
  return groupProgress
}


