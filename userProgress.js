
let overallprogress = Number(localStorage.getItem("progress")) || 0;
let groupProgress = Number(localStorage.getItem("groupProgress")) || 0;
let QuizGroups = localStorage.getItem("QuizGroup")
console.log(QuizGroups)
let currentGroupName = PageMode ? Object.keys(Katakana).find(key => Katakana[key] === QuizGroups) : Object.keys(Hiragana).find(key => Hiragana[key] === QuizGroups)

console.log(currentGroupName)

document.getElementById("endPage").addEventListener("click", function () {
  window.location.href = "index.html";
  localStorage.removeItem("correctAnswer");
  localStorage.removeItem("wrongAnswer");
  localStorage.removeItem("groupProgress");
});

if (window.location.pathname === "/EndPage.html") {
  document.getElementById("correct").textContent +=
    " " + correctAnswer + " questions";
  document.getElementById("wrong").textContent +=
    " " + wrongAnswer + " questions";
}

groupProgress = correctAnswer / QuizLength * 100
localStorage.setItem(currentGroupName + "Progress",groupProgress)

