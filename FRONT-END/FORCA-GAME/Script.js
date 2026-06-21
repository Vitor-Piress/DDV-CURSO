const lettersKeys = document.querySelectorAll(".keyboard-letter");
const wordContainer = document.getElementById("word-container");
const stickmanImg = document.getElementById("stickman-img");
const modal = document.getElementById("modal-container");
const closeButton = document.getElementById("close-button");
const restartButton = document.getElementById("restart-button");
const pauseButton = document.getElementById("pause-button");

const word = "LARANJA";

let vida = 1;

// console.log(word.length);

function loadWord() {
  for (let index = 0; index < word.length; index++) {
    // <p class="letter">A</p>
    const paragraph = document.createElement("p");
    paragraph.classList.add("letter");
    paragraph.value = word[index];

    //   console.log(word[index]);
    //   console.log(paragraph.value);

    wordContainer.appendChild(paragraph);
  }
}
loadWord();
const lettersWord = document.querySelectorAll(".letter");

lettersKeys.forEach((element) => {
  element.addEventListener("click", () => {
    const found = Array.from(lettersWord).some(
      (letter) => letter.value === element.value,
    );

    if (found) {
      lettersWord.forEach((letter) => {
        if (letter.value === element.value) {
          letter.textContent = element.value;
        }
      });
    } else {
      vida++;
      stickmanImg.src = `Assets/0${vida}.svg`;
      if (vida === 6) {
        modal.classList.remove("hidden");
        modal.style.display = "flex";
        lettersKeys.forEach((element) => {
          element.setAttribute("disabled", true);
        });
        Array.from(lettersWord).forEach((element) => {
          element.textContent = element.value;
        });
      }
    }

    element.setAttribute("disabled", true);
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

restartButton.addEventListener("click", () => {
  location.reload();
});

restartButton.addEventListener("mouseenter", () => {
  restartButton.classList.add("rotating");
});

restartButton.addEventListener("animationend", () => {
  restartButton.classList.remove("rotating");
});

pauseButton.addEventListener("click", () => {
  modal.style.display = "flex";
});
