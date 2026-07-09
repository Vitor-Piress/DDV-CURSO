const lettersKeys = document.querySelectorAll(".keyboard-letter");
const wordContainer = document.getElementById("word-container");
const stickmanImg = document.getElementById("stickman-img");
const modal = document.getElementById("modal-container");
const closeButton = document.getElementById("close-button");
const restartButton = document.getElementById("restart-button");
const pauseButton = document.getElementById("pause-button");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const frutas = [
  "LARANJA",
  "ABACAXI",
  "UVA",
  "ABACATE",
  "LIMAO",
  "BANANA",
  "MORANGO",
  "PITAYA",
  "MANGA",
];

const word = frutas[getRandomInt(9)];

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
          element.classList.add("loose");
        });
        Array.from(lettersWord).forEach((element) => {
          element.textContent = element.value;
          element.classList.add("loose");
        });
      }
    }

    element.setAttribute("disabled", true);

    const blank = Array.from(lettersWord).every(
      (letter) => letter.textContent != "",
    );

    if (blank) {
      if (vida < 6) {
        lettersKeys.forEach((letter) => {
          letter.setAttribute("disabled", true);
        });
        lettersWord.forEach((letter) => {
          letter.classList.add("win");
        });
      }
    }
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

document.addEventListener("keydown", (e) => {
  const tecla = event.key;

  if (!/^[A-Za-z]$/.test(tecla)) {
    return;
  }

  if (vida === 6) {
    return;
  }

  const found = Array.from(lettersWord).some(
    (letter) => letter.value === e.key.toUpperCase(),
  );

  if (found) {
    lettersWord.forEach((letter) => {
      if (letter.value === e.key.toUpperCase()) {
        letter.textContent = e.key.toUpperCase();
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
        element.classList.add("loose");
      });
    }
  }

  const foundKey = Array.from(lettersKeys).some(
    (letter) => letter.value === e.key.toUpperCase(),
  );

  if (foundKey) {
    lettersKeys.forEach((letter) => {
      if (letter.value === e.key.toUpperCase()) {
        letter.setAttribute("disabled", true);
      }
    });
  }

  const blank = Array.from(lettersWord).every(
    (letter) => letter.textContent != "",
  );

  if (blank) {
    if (vida < 6) {
      lettersKeys.forEach((letter) => {
        letter.setAttribute("disabled", true);
      });
      lettersWord.forEach((letter) => {
        letter.classList.add("win");
      });
    }
  }
});
