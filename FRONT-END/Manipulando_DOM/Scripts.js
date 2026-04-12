/* ------------------------------- HTML Instantiation -------------------------------  */

const form = document.getElementById("Input-Container");
const task_input = document.getElementById("Task-Input");
const submit_button = document.getElementById("Submit-Button");
const delete_button = document.getElementsByClassName("Delete-Button");
const edit_button = document.getElementsByClassName("Edit-Button");
const check_button = document.getElementsByClassName("Check-Button");
const task_section = document.getElementById("tasks");
const body = document.querySelector("body");

let items = [];

/* ------------------------------- Alert ------------------------------- */

function Alert(text, color) {
  const blockAlert = `<path d="m15 9-6 6"></path>
  <path d="m9 9 6 6"></path>`;
  const infoAlert = `<path d="M12 16v-4"></path>
  <path d="M12 8h.01"></path>`;
  let reason;

  switch (color) {
    case "red":
      reason = blockAlert;
      break;
    case "blue":
      reason = infoAlert;
      break;
  }

  const html = `<div id="alert" class="${color}">
      <svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
  ${reason}
</svg>
      ${text}
    </div>`;

  return html;
}

/* ------------------------------- HTML Constructor ------------------------------- */

function TaskCardConstructor(id, title, isChecked) {
  switch (isChecked) {
    case true:
      checked = "checked";
      break;
    case false:
      checked = "";
      break;
  }

  const html = `<div class="Task-Card ${checked}" checked="${isChecked}" data-id="${id}">
          <div id="Task-Name">
            <div class="Check-Button" >
            <div class="hidden" id="check-icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg></div>
            </div>
            <p id="Task-text">${title}</p>
          </div>
          <div id="Task-Options">
            <button class="Delete-Button">
              Deletar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                />
              </svg>
            </button>
            <button class="Edit-Button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"
                />
              </svg>
            </button>
          </div>
        </div>`;

  return html;
}

/* ------------------------------- Listenners ------------------------------- */

// Delete Task
task_section.addEventListener("click", (event) => {
  // Encontra o botao Delete mais próximo
  const deleteBtn = event.target.closest(".Delete-Button");
  if (deleteBtn) {
    const card = deleteBtn.closest(".Task-Card");
    const itemId = card.getAttribute("data-id");

    items = items.filter((item) => item.id !== Number(itemId));
    localStorage.setItem("items", JSON.stringify(items));

    card.style.animation = "deleteFadeOut 0.5s";
    setTimeout(() => {
      card.remove();
    }, 450);
  }
});

// Edit Task
task_section.addEventListener("click", (event) => {
  // Encontra o botao Edit mais próximo
  const editBtn = event.target.closest(".Edit-Button");

  if (editBtn) {
    if (task_input.value === "") {
      body.insertAdjacentHTML(
        "beforeend",
        Alert(
          "Para alterar uma tarefa, digite o novo título no campo de entrada!",
          "blue",
        ),
        setTimeout(() => {
          const alert = document.getElementById("alert");
          alert.style.opacity = "0";

          setTimeout(() => alert.remove(), 1000);
        }, 5000),
      );
      return;
    }
    // Encontra o card mais próximo
    const card = event.target.closest(".Task-Card");
    const task_title = card.querySelector("#Task-text");
    const itemId = card.getAttribute("data-id");

    const item = items.find((item) => item.id === Number(itemId));
    item.title = task_input.value;
    localStorage.setItem("items", JSON.stringify(items));

    task_title.textContent = task_input.value;
    task_input.value = "";
  }
});

// Check Task
task_section.addEventListener("click", (event) => {
  // Encontra o botao Check mais próximo
  const checkBtn = event.target.closest(".Check-Button");

  if (checkBtn) {
    // Encontra o card mais próximo
    const card = event.target.closest(".Task-Card");
    const itemId = card.getAttribute("data-id");

    const item = items.find((item) => item.id === Number(itemId));
    card.classList.toggle("checked");
    item.checked = card.classList.contains("checked");
    localStorage.setItem("items", JSON.stringify(items));
  }
});

/* ------------------------------- Local Storage Load Function ------------------------------- */

function loadItems() {
  const itemsFromStorage = localStorage.getItem("items");

  if (!itemsFromStorage) {
    return;
  }

  items = JSON.parse(itemsFromStorage);

  for (const item of items) {
    const listItem = TaskCardConstructor(item.id, item.title, item.checked);
    task_section.insertAdjacentHTML("afterbegin", listItem);
  }
}

/* ------------------------------- Submit Listener ------------------------------- */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemId = new Date().getTime();
  const title = task_input.value;

  if (task_input.value == "") {
    body.insertAdjacentHTML(
      "beforeend",
      Alert("Você não pode inserir uma tarefa vazia!", "red"),
      setTimeout(() => {
        const alert = document.getElementById("alert");
        alert.style.opacity = "0";

        setTimeout(() => alert.remove(), 1000);
      }, 3000),
    );
    return;
  }

  // Caso input seja muito extenso alerta o usuário
  if (task_input.value.length >= 34) {
    body.insertAdjacentHTML(
      "beforeend",
      Alert("Cuidado ao adicionar títulos muito extensos!", "blue"),
      setTimeout(() => {
        const alert = document.getElementById("alert");
        alert.style.opacity = "0";

        setTimeout(() => alert.remove(), 1000);
      }, 3000),
    );
  }
  task_section.insertAdjacentHTML(
    "afterbegin",
    TaskCardConstructor(itemId, title, false),
  );

  items.push({
    id: itemId,
    title: task_input.value,
    checked: false,
  });
  localStorage.setItem("items", JSON.stringify(items));

  task_input.value = "";
});

// Calling Locas Storage Function
loadItems();
