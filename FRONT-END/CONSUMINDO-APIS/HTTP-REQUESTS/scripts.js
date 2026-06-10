const BASE_URL =
  "https://crudcrud.com/api/bc3c4bf0f1b44ddba32b24fd365e94ce/users";

const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const userList = document.getElementById("userList");
const loadingPlaceholder = document.getElementById("loadingPlaceholder");
const submitBtn = document.getElementById("submitButton");
let isLoading = false;

function setIsLoading() {
  isLoading = true;
  loadingPlaceholder.style.display = "block";
  submitBtn.setAttribute("disabled", "true");
  userList.style.display = "none";
}

function setIsNotLoading() {
  isLoading = false;
  loadingPlaceholder.style.display = "none";
  submitBtn.removeAttribute("disabled");
  userList.style.display = "block";
}

function insertOnList(name, id) {
  const li = document.createElement("li");
  li.textContent = name;
  userList.appendChild(li);
}

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isLoading) {
    return;
  }

  setIsLoading();

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: userNameInput.value,
    }),
  });

  const data = await response.json();
  setIsNotLoading();
  insertOnList(data.name, data._id);
});

// fetch("https://crudcrud.com/api/bc3c4bf0f1b44ddba32b24fd365e94ce/users")
//   .then((response) => response.json())
//   .then((data) => console.log("Users: ", data));

// Mesmo resultado do código escrito anteriormente somente com fetch, porém agora com async await
async function loadUsers() {
  const response = await fetch(
    "https://crudcrud.com/api/bc3c4bf0f1b44ddba32b24fd365e94ce/users",
  );

  const users = await response.json();

  for (const user of users) {
    insertOnList(user.name);
  }
}

function clearUsers() {
  userList.innerHTML = "";
}

loadUsers();
