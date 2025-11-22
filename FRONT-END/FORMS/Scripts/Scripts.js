const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("email");
const inputMusic = document.getElementById("music");
const inputCode = document.getElementById("code");
const occupationSelect = document.getElementById("occupation");
const form = document.getElementById("form");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const checkboxError = document.getElementById("hobbiesError");
const errorMessage = inputEmail.nextElementSibling;

inputName.addEventListener("change", (event) => {
  console.log(event.target.value);
});

function buscarDados() {
  // simulando que está carregando dados de outro local

  const nameValue = "Jorge";
  const emailValue = "jorginho@mail.com";
  const hobbies = ["music", "code"];

  inputName.value = nameValue;
  inputEmail.value = emailValue;

  if (hobbies.includes("code")) {
    inputCode.checked = true;
  }

  if (hobbies.includes("music")) {
    inputMusic.checked = true;
  }
}

// buscarDados();

function buscarDadosSelect() {
  // simulando que está buscando dados externos

  const options = [
    "Programador",
    "Marceneiro",
    "Administrador",
    "Zelador",
    "Designer",
    "Pintor",
    "Outro",
  ];

  for (const index of options) {
    const optionElementForSelect = document.createElement("option");
    optionElementForSelect.value = index;
    optionElementForSelect.textContent = index;
    occupationSelect.appendChild(optionElementForSelect);
  }
}

// change -> dispara o evento a cada alteração sempre que finalizada, por exemplo, ao tirar o foco
occupationSelect.addEventListener("change", (e) => {
  console.log(e.target.value);
});

// input -> dispara o evento quando o elemento sofre qualquer alteração no input
inputName.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// blur -> dispara o evento quando o elemento perde o foco
inputName.addEventListener("blur", (e) => {
  console.log(e.target.value);
});

// focus -> dispara o evento quando o elemento ganha foco
inputName.addEventListener("focus", (e) => {
  console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkboxError.textContent = "";
  errorMessage.textContent = "";

  const hobbies = [];

  if (inputMusic.checked) {
    hobbies.push(inputMusic.value);
  }

  if (inputCode.checked) {
    hobbies.push(inputCode.value);
  }

  if (hobbies.length == 0) {
    checkboxError.textContent = "Marque pelo menos um hobbie";
    return;
  }

  if (!emailRegex.test(inputEmail.value)) {
    errorMessage.textContent = "Email Inválido!";
    return;
  }

  console.log("Formulário submetido", {
    name: inputName.value,
    email: inputEmail.value,
    hobbies: hobbies,
    occupation: occupationSelect.value,
  });
});

buscarDadosSelect();
