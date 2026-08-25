/*

Create variables to store the following information about a
student:
• Student name
• Student age
• Is the student currently enrolled?
• Student grade
• Student email
Print all the values and their data types.
*/

let studentName = "Vivaan";
let studentAge = 10;
let studentEnrolled = true;
let studentGrade = '5th';
let studentEmailID = 'vivaan11@gmail.com'

console.log(studentName);
console.log(studentAge);
console.log(studentEnrolled);
console.log(studentGrade);
console.log(studentEmailID);

/*

Assignment 2 — Identify the Data Type
Problem Statement
Create variables for the following values:
100
"100"
true
undefined
null
12345678901234567890n
*/

let id = 100;
console.log(typeof id);

let studID = "100";
console.log(typeof studID);

let isActive = true;
console.log(typeof isActive);

let num1 = undefined;
console.log(typeof num1);

let num2 = null;
console.log(typeof num2);

let num3 = 12345678901234567890n;
console.log(typeof num3);


/*
Assignment 3 — var, let, and const
Problem Statement
Create three variables:
companyName
employeeName
employeeId
Use:
• var for company name
• let for employee name
• const for employee ID
Then:
1. Print all values.
2. Reassign companyName.
3. Reassign employeeName.
4. Try to reassign employeeId.
Observe what happens.
*/

var companyName = "Coforge";
let empName = "Ritika";
const empID = 899023;

console.log("Company Name: " +companyName);
console.log("Employee Name: "+empName);
console.log("Employee ID: "+empID);
companyName = "BNY";
empName = "Pavan";
//empId = 653536;  //empId = 653536;   ReferenceError: empId is not defined // const can't be reassigned
console.log("----Reassigning the value for the variable----");
console.log("Company Name: " +companyName);
console.log("Employee Name: "+empName);
//console.log("Employee ID: "+empID);

/*
Assignment 4 — Predict the Output
Give students the following code without the solution
initially.
Problem Statement
Predict the output before executing the program.

var x = 10;
let y = 20;
const z = 30;

console.log(x);   
console.log(y);
console.log(z);

x = 100;
y = 200;

console.log(x);
console.log(y);
console.log(z);
*/

var x = 10;
let y = 20;
const z = 30;

console.log(x);    // 10
console.log(y);    //20
console.log(z);    //30

x = 100;
y = 200;

console.log(x);  // 100
console.log(y);  //200
console.log(z);  //30


/*
Assignment 5 — Find the Error
Problem Statement
Identify which statements will produce an error.
var a = 10;
a = 20;

let b = 30;

b = 40;

const c = 50;
c = 60;
*/

var a = 10;
a = 20;
console.log(a);

let b = 30;
b = 40;
console.log(b);

const c = 50;
//c = 60;  // causes error, since for const reassignment is not possible // TypeError: Assignment to constant variable.
console.log(c); //50

/*
Assignment 6 — Mixed Data Types
Problem Statement
Create variables representing an employee:
Employee name
Employee ID
Salary
Is employee permanent?
Joining date
Manager name
Use appropriate primitive data types.
Print the values and their types.
*/

let employeeName = "Srilatha";
const employeeID = 68;
let salary = 50000;
let isPermanent = true;
const joiningDate = "1st June, 2026";  
let managerName = undefined;
console.log(employeeName);
console.log(typeof employeeName);

console.log(employeeID);
console.log(typeof employeeID);

console.log(salary);
console.log(typeof salary);

console.log(isPermanent);
console.log(typeof isPermanent);

console.log(joiningDate);
console.log(typeof joiningDate);

console.log(managerName);
console.log(typeof managerName);

/*
Assignment 7 — Employee Profile
Problem Statement
Create an employee profile using JavaScript variables.
Your program should store:
• Employee name
• Employee ID
• Age
• Salary
• Department
• Is employee active?
• Manager
• Employee joining date
• A very large employee reference number using BigInt
Use a suitable variable declaration (var, let, or const) for each.
*/

var employName = "John"
const employID = 782;
let age = 50;
let empSal = 100000;
var department = "QA";
let isEmpActive = true;
const empJoinDate = "12 Sep 2006";
const employeeReferenceNo = 8889898989662333n;

console.log(employName);
console.log(employID);
console.log(age);
console.log(empSal);
console.log(department);
console.log(isEmpActive);
console.log(empJoinDate);
console.log(employeeReferenceNo);

/*
JavaScript – Find the Error Questions
Question 1
let name = "Rahul";
let name = "Amit";   //redeclaration not allowed,  Identifier 'name' has already been declared
console.log(name);  
Find the error and explain why it occurs.
*/

/*
Question 2
const age = 25;
age = 30;
console.log(age);  //SyntaxError: Identifier 'age' has already been declared
*/

/*Question 3 

const city;    //SyntaxError: Missing initializer in const declaration
city = "Pune";
console.log(city); 

*/

/* Question 4 

let salary = 50000;  //SyntaxError: Identifier 'salary' has already been declared
salary = 60000;
console.log(salary);

*/

/* Question 5 */
var company = "ABC";
var company = "XYZ";
console.log(company); // XYZ

/* Question 6 
let age1 = 25;
var age1 = 30;  // SyntaxError: Identifier 'age1' has already been declared
console.log(age1); 
*/

/*Question 7 */
let age2 = 25;
age2 = "Twenty Five";
console.log(age2); //Twenty Five


/*Question 8
const value = 100;
value = "Hello"; // TypeError: Assignment to constant variable.
console.log(value);
*/

/*
Tricky Questions
Explain Output of following programs
Question 1 */
var x = 10;
{
var x = 20;
}
console.log(x); //20 function scope


/*
Question 2 */
let x1 = 10;
{
let x1 = 20;
}
console.log(x1);  //10   global scope


/*Question 3
*/
const x2 = 10;
{
const x2 = 20;
}
console.log(x2); //10

/*Question 4 */

let age5 = 25;
{
let age5 = 30;
console.log(age5);  //30
}
console.log(age5);  //25

/*Question 5 */

var x6 = 10;
{
var x6 = 20;
console.log(x6); //20
}
console.log(x6);  //20  //value 10 will be override to 20

/*Question 6 
console.log(age7); //ReferenceError: Cannot access 'age7' before initialization
let age7 = 25;
*/

/* Question 7 */
console.log(age8); //undefined
var age8 = 25;

/*Question 8 */
var x3 = 10;
{
let x3 = 20;
console.log(x3);//20
} console.log(x3);//10


/*
Question 9  
let x10 = 10;
{
var x10 = 20; //SyntaxError: Identifier 'x10' has already been declared
}
console.log(x10);//10
*/

/*Question 10 */
const x7 = 10;
{
var x7 = 20;  //SyntaxError: Identifier 'x7' has already been declared
}
console.log(x7);
