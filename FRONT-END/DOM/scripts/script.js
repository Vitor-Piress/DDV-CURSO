const title = document.querySelector("h1");
const button = document.getElementById("buttonT");
const textInput = document.getElementById("textInput");
const container = document.getElementById("container");

const secondParagraph = document.getElementById("2-paragraph");
const containerTest = document.getElementById("container-parent-node");

console.log(secondParagraph.nextElementSibling);
console.log(secondParagraph.nextSibling.nodeType);
console.log(secondParagraph.previousElementSibling);
console.log(secondParagraph.previousSibling);

// seleciona entre o primeiro e último nó ou elemento dependendo do que escolher
const firstChild = containerTest.firstChild;
const lastElemChild = containerTest.lastElementChild;
console.log(firstChild);
console.log(lastElemChild);

// .children .childNodes seleciona todos os filhos diretos do elemento
const children = containerTest.children; // seleciona entre o primeiro e último nó ou elemento dependendo
const children2 = containerTest.childNodes;
console.log(children2);
console.log(children);

// .parentNode seleciona o pai direto do elemento
const containerParagraph = secondParagraph.parentNode;
console.log(containerParagraph);

// console.log(getComputedStyle(title).color);

button.addEventListener("click", () => {
  const texto = textInput.value;
  title.textContent = texto;
});

let counter = 0;
document.addEventListener("keydown", () => {
  counter++;
  console.log(`Contagem: ${counter}`);
});

window.addEventListener("resize", (event) => {
  console.log("teste");
});

const commonTitle = document.createElement("h2");

console.log(commonTitle);
commonTitle.style.backgroundColor = "#000";
commonTitle.style.height = "10px";
commonTitle.style.width = "10px";
commonTitle.style.borderRadius = "10px";

document.body.appendChild(commonTitle);
document.body.insertBefore(commonTitle, container);
container.append(commonTitle, "texto inserido com append");
// container.remove(commonTitle);
