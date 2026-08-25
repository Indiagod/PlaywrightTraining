/*
1. Arithmetic operators +,-,*,/,%
    1. Unary operator  ++ --
2. Relational operators  >, >=, <, <=, !=
3. Equality 
    1. Loose equality
    2. Strict equality
4. Logical opertaors
&&, ||, !

*/
console.log("Let's learn operator in JS")

console.log("Arimetic operator");
let num1= 100, num2=200;
console.log(num1+num2);// 300
console.log("Addition is: "+num1+num2); // 100200
console.log("Addition is: "+(num1+num2)); //300

console.log("Sub operator")
console.log("Addition is: "+(num1-num2));

console.log("Multiple operator")
console.log("Mutiplition is: "+(num1*num2));

console.log("Divison is: "+(num1/num2));

console.log("Modulus is: "+(num1%num2));

console.log("Interview question")

console.log(90/0);//Infinity 
console.log(-80/0); //-Infinity
console.log("Hello"/0);//NAN (not a number)
console.log(undefined/0); // NAN
console.log(0/8); //0
console.log(0/0); //NAN

console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0

console.log(null/0); //NAN

console.log(Number("hello")); // NAN

console.log(Number(undefined)); // NAN


console.log("Unary Operator");
/*
++(Increment)
-------------
1. preIncrement  ++num1    num1 = num1 +1
-------------------------------
value will increment first and then use it 

2. postIncrement  num1++ num1= num1+1
-------------------------------------
value will use first and then increment

--(Decrement)

*/
