// Callbacks nada mais são quando uma função recebe outra função como parâmetro, ou seja, callback é esse parâmetro-função de outra função

function ola(callback) {
  console.log("ola");
  callback();
}

ola(() => {
  console.log("brother");
});

// setInterval is a native js function that executes a function every 'X' time
setInterval(() => {
  console.log("...");
}, 1000);
