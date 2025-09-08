let correctAnswer = Number(localStorage.getItem("correctAnswer")) || 0;
let wrongAnswer = Number(localStorage.getItem("wrongAnswer")) || 0;

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
}
