let overallprogress = Number(localStorage.getItem("overallProgress")) || 0;
let QuizLength = Number(localStorage.getItem("QuizLength")) || 0;
let QuizName = localStorage.getItem("QuizName");
let PageModePrefix = PageMode ? "K" : "H"; //checks whether the page is in Hiragana or Katakana mode
let groupProgress =
  Number(localStorage.getItem(QuizName + PageModePrefix + "Progress")) || 0;

["click","keydown"].forEach((option)=>{ // adds an event listener for each event contained in the array, source: Stackoverflow discussion; source of "keydown": MDN
  document.getElementById("endPage").addEventListener(option,function(){
  window.location.href = "index.html";
  localStorage.removeItem("correctAnswer");
  localStorage.removeItem("wrongAnswer");
  })
})

if (window.location.pathname.includes("EndPage.html")) { //executed when the end page is accessed, source: ChatGPT
  document.getElementById("correct").textContent += // adds additional content to the p element of the end page, source: ChatGPT
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

function calculateProgress() { // calculates the group progress by dividing correct answers by quiz length and multiplying by 50 --> max progress achievable in one session is therefore set to 50%
  let progressIncrease = (correctAnswer / QuizLength) * 50;
  let penalty = (wrongAnswer / QuizLength) * 20; //calculates the penalty for wrong answers; max progress decrease in one session is set to 20%
  groupProgress = Math.min(100, groupProgress + progressIncrease - penalty);
  groupProgress = Math.max(0, groupProgress);
  groupProgress = Math.round(groupProgress)
  return groupProgress;
}

function calculateOverallProgress() { 
  const groups = Object.keys(Hiragana);
  const modes = ["K", "H"];
  let totalProgress = 0;
  let count = 0;

  groups.forEach((group) => { //creates all possible progress key combinations by combining all object keys (which are equal to the button ids from the dashboard) with each page mode prefix
    modes.forEach((mode) => {
      const key = group + mode + "Progress";
      const progress = Number(localStorage.getItem(key)) || 0;
      totalProgress += progress; //adds up all group progress
      count++; // counts the total number of progress values
    });
  });

  const calcProgress = count > 0 ? totalProgress / count : 0; // calculates the overall progress by dividing the progress sum by the number of values
  localStorage.setItem("overallProgress", calcProgress);
}
