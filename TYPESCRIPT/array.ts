// You need to set the type of the array's entries
let arrays: string[];
arrays = ["jorge", "junior", "jacó"]; // let arrays: string[]

/*
If you dont set the type of the entries, you i'll have:

let arrays: [];

arrays = [1, 2, 3]
Type '[number, number, number]' is not assignable to type '[]'.
  Source has 3 element(s) but target allows only 0.
*/

arrays.forEach((name) => {
  // (parameter) name: string
  console.log(name.toUpperCase());
});

// Array com tipo definido em suas posições: (TUPLA)
let arrayTupla: [string, number] = ["Vitor", 21];

/*
let arrayTupla: [string, number] = [];
Type '[]' is not assignable to type '[string, number]'. Source has 0 element(s) but target requires 2.
*/

console.log(
  `\n Olá, sou ${arrayTupla[0].toUpperCase()} e tenho ${arrayTupla[1]} anos`,
);
