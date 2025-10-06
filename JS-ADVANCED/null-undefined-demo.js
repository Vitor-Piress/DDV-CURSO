// Demonstrating the differences between null and undefined

console.log("=== typeof behavior ===");
console.log(typeof null);        // "object" (bug!)
console.log(typeof undefined);    // "undefined"

console.log("\n=== Equality checks ===");
console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log("\n=== Assignment examples ===");
let explicitNull = null;
let noAssignment; // undefined by default
let explicitUndefined = undefined;

console.log("explicitNull:", explicitNull, typeof explicitNull);
console.log("noAssignment:", noAssignment, typeof noAssignment);
console.log("explicitUndefined:", explicitUndefined, typeof explicitUndefined);

console.log("\n=== Function return values ===");
function returnNothing() {
    // returns undefined implicitly
}

function returnExplicitNull() {
    return null;
}

console.log("returnNothing():", returnNothing(), typeof returnNothing());
console.log("returnExplicitNull():", returnExplicitNull(), typeof returnExplicitNull());

console.log("\n=== Object properties ===");
const obj = {};
console.log("obj.nonExistentProperty:", obj.nonExistentProperty, typeof obj.nonExistentProperty);
obj.explicitNull = null;
console.log("obj.explicitNull:", obj.explicitNull, typeof obj.explicitNull);

console.log("\n=== Checking for null/undefined ===");
function checkValue(value) {
    if (value === null) {
        return "Value is null";
    } else if (value === undefined) {
        return "Value is undefined";
    } else {
        return "Value is something else";
    }
}

console.log("checkValue(null):", checkValue(null));
console.log("checkValue(undefined):", checkValue(undefined));
console.log("checkValue(0):", checkValue(0)); 