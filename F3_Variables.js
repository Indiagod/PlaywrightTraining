/*
Variable
====================
Name of storage location is called variable

In JS 3 keyword we use to declare variable
----------------------------------------------
var, let, const

Var(Older and not used)
====================
Scope: Global + function
-Var is fully hoisted
-redeclartion is allowed
-reassignment is allowed

modern syntax
-----------------------
let:
Scope: Global + block scope
-For mutable data use let
-let is hoisted but let initailize in temporal dead zone so
-If you try to access before declaration then you will get reference error
-Redeclartion is not allowed


const:
================
Scope: Global + block scope
-For immutable data use let
-const is hoisted but let initailize in temporal dead zone so
-If you try to access before declaration then you will get reference error
-Redeclartion is not allowed
-Reassignment is not allowed

Syntax:

let id =101;
let name = 'Jay';


*/

//var redeclaration and reassignment allowed
var id=100;
var id=200;
var id= 300;
console.log(id); //300
console.log(typeof id)


//reassignment 
id = '1234';
console.log(id); //1234
console.log(typeof id);

//let redeclartion not allowed and reassignment allowed
let toolName = "Selenium";
//let toolName = "Playwright";
//console.log(toolName);  //SyntaxError: Identifier 'toolName' has already been declared

toolName = "Playwright";
console.log(toolName);

//Const redeclartion & reassignment not allowed
const vendorName = "Microsoft";


//const vendorName = "Microsoft"; //Identifier 'vendorName' has already been declared

console.log(vendorName);

console.log("----Global Scope-----");

//Global scope: anything declared inside JS file & outside any block ot function is called global scope
//Global data can be accessed everywhere means inside function/block
var fname= 'Hiteshi';
let location = "US";
const emailID = "abc@gmail.com";

console.log(fname);
console.log(location);
console.log(emailID);

console.log("-----Call global data through function------");

function show()
{
console.log("FirstName: "+fname+"\n & location: "+location+ "\n & emailID: "+emailID+"");
    }

//calling the function
show();
