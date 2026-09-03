/*Assignments On Operators
=============================
Guess the output?
---------------------
*/
console.log(1 + "2" + 3); //123
console.log(1 + 2 + "3"); //33
console.log("5" * true); //5
console.log(10 > 5 > 1); //false

let a = 2;
    let b = a++ + ++a; // 2 + 4 //6
    console.log(a, b); //(4,6)

let a1 = 3;
console.log(a1++ + a1++ + ++a1);  // 3 + 4 + 6 = 13


console.log(5 * 2 == "10"); //true

let x = 1;
let y = ++x + x++ + x; // 2 + 2 +3 = 7
console.log(x, y); //(3,7)

console.log(10 > 5 && 20 < 30);  //true

console.log(null || undefined || "Playwright"); //Playwright
