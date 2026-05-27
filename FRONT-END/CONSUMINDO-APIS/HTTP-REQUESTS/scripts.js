const BASE_URL =
  "https://crudcrud.com/api/05273b19a34243d783f88499b50deeef/users";

const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const userList = document.getElementById("userList");
const deleteButton = document.getElementsByClassName("delete");

function insertOnList(name, id) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "delete";
  button.id = id;
  button.classList.add("delete");
  li.textContent = name;
  userList.appendChild(li);
  li.appendChild(button);
}

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();

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
  insertOnList(data.name, data._id);
});

// Não sei se está funcionando pois consumi todo meu limite da API CRUDCRUD, último teste realizado foi com esse código e não consegui ter certeza se funcionou ou não.
deleteButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const ID = this.deleteButton.id;

  const response = await fetch(BASE_URL + "/" + ID, {
    method: "DELETE",
  });
  clearUsers();
  loadUsers();
});

// fetch("https://crudcrud.com/api/05273b19a34243d783f88499b50deeef/users")
//   .then((response) => response.json())
//   .then((data) => console.log("Users: ", data));

// Mesmo resultado do código escrito anteriormente somente com fetch, porém agora com async await
async function loadUsers() {
  const response = await fetch(
    "https://crudcrud.com/api/05273b19a34243d783f88499b50deeef/users",
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
