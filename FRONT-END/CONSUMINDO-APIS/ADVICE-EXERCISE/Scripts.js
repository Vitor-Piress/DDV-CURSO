const adviceText = document.getElementById("adviceText");
const adviceId = document.getElementById("adviceId");
const form = document.getElementById("containerForm");
const submitButton = document.getElementById("submitButton");

let isLoading = false;

function setIsLoading() {
  isLoading = true;
}

function setIsNotLoading() {
  isLoading = false;
}

fetch("https://api.adviceslip.com/advice", {
  method: "GET",
  cache: "no-store", // <--- Não usa e nem salva no cache
})
  .then((response) => response.json())
  .then((data) => {
    adviceText.innerHTML = `<span class="highlight">"</span> ${data.slip.advice} <span class="highlight">"</span>`;
    adviceId.innerHTML = `Conselho <span class="highlight">#${data.slip.id}</span>`;
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isLoading) {
    return;
  }

  setIsLoading();

  const diceImg = submitButton.querySelector("img");
  diceImg.classList.add("roll-dice");

  setTimeout(() => {
    diceImg.classList.remove("roll-dice");
  }, 1000);

  fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    cache: "no-store", // <--- Não usa e nem salva no cache
  })
    .then((response) => response.json())
    .then((data) => {
      adviceText.innerHTML = `<span class="highlight">"</span> ${data.slip.advice} <span class="highlight">"</span>`;
      adviceId.innerHTML = `Conselho <span class="highlight">#${data.slip.id}</span>`;
      setIsNotLoading();
    });
});
