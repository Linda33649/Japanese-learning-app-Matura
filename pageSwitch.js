let PageMode = localStorage.getItem("PageMode") === "true"; //checks whether the output string is exactly "true". If yes it becomes true and if not it becomes false

document.getElementById("modeSwitch").addEventListener("click", function () {
  if (PageMode == true) {
    PageMode = !PageMode;
    localStorage.setItem("PageMode", PageMode);
    SwitchPageHiragana();
    document.getElementById("modeSwitch").textContent = "Switch to Katakana";
  } else {
    SwitchPageKatakana();
    PageMode = !PageMode;
    localStorage.setItem("PageMode", PageMode);
    document.getElementById("modeSwitch").textContent = "Switch to Hiragana";
  }
});

window.onload = function () {
  if (PageMode == true) {
    SwitchPageKatakana();
  } else {
    SwitchPageHiragana();
  }
};

function SwitchPageKatakana() {
  document.getElementById("Vowel").textContent = "ア";
  document.getElementById("Ka-row").textContent = "カ";
  document.getElementById("Sa-row").textContent = "サ";
  document.getElementById("Ta-row").textContent = "タ";
  document.getElementById("Na-row").textContent = "ナ";
  document.getElementById("Ha-row").textContent = "ハ";
  document.getElementById("Ma-row").textContent = "マ";
  document.getElementById("Ya-row").textContent = "ヤ";
  document.getElementById("Ra-row").textContent = "ラ";
  document.getElementById("Wa-row").textContent = "ワ";
  document.getElementById("Dakuten").textContent = "ガ";
  document.getElementById("All");
}

function SwitchPageHiragana() {
  document.getElementById("Vowel").textContent = "あ";
  document.getElementById("Ka-row").textContent = "か";
  document.getElementById("Sa-row").textContent = "さ";
  document.getElementById("Ta-row").textContent = "た";
  document.getElementById("Na-row").textContent = "な";
  document.getElementById("Ha-row").textContent = "は";
  document.getElementById("Ma-row").textContent = "ま";
  document.getElementById("Ya-row").textContent = "や";
  document.getElementById("Ra-row").textContent = "ら";
  document.getElementById("Wa-row").textContent = "わ";
  document.getElementById("Dakuten").textContent = "が";
  document.getElementById("All");
}
