let num1 = 90;
console.log(num1);
console.log("This is number1: "+num1); 
console.log("This is number1: ",num1); 
console.log(typeof num1);

let num2 = -90;
console.log(num2);
console.log(typeof num2);

let num3 = 89.8998;
num3 = true;
console.log(num3);
console.log(typeof num3);

/*
size = 8byte(64 bites)
1byte = 8bits

3 types for constructor - number, boolean, string constructor
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let num4 = 9007199254740991;
num4 = num4 +1;
console.log(num4);
console.log(typeof num4);



console.log("-----------BigInt---------");
//BigInt: add number with suffix n
//BitInt added after ES6 version

let num5 = 90071992547409928989998n;
console.log(typeof num5);

let num6 = 8988n;
console.log(typeof num6);



console.log("-----------Boolean---------");
let isActive = true;
console.log("Participates are active or not:"+ isActive);
console.log(typeof isActive);


console.log("-----------String---------");

/*
String is primitive datatype
Strng is represented by dynamic object
String is a collcetion of characters

Nore: In JS we don't have any character type


declaration:
double quot : ""
single quot : ''
templete : `` back tick
*/

let fname = 'Pradeepa';
console.log("fname is" + fname);
console.log(typeof fname);

let location = "India";
console.log("location is" + location);
console.log(typeof location);

let email = `abc@gmail.com`;
console.log("Email is" + email);
console.log(typeof email);

let ch = 'p';
console.log(typeof ch);


let profile = `I was also in the similar situation in 2018.
 I received a letter on 28th Dec 2017, for medical exam along with the document verification. 
 The same day I submitted my resignation to CTS. I completed my Medical on 5th jan 2018 and
  the document verification started afterwards. Railway took around 1 week for document verification and on 11th Jan 2018,
   they handed me the Barrel letter to Join ZRTI on 12th Jan. At this, I was very confused as to 
how I could join Railways as I was still serving the notice period.`;
console.log(profile);

let currentYear = 2026;
console.log(currentYear);

let requestPayload = `{
  "name" : "Apple macbook",
  "data": {
  "Year": ${currentYear};
  } 
}`
console.log(requestPayload);
console.log(typeof requestPayload);

console.log(`request payload is: ${requestPayload}`);


/*

If the variable declared & not intializated, it will provide undefined type
*/

console.log("-----------undefined---------");

let age;
console.log(age);
console.log(typeof age);

let stdNAme = null;
console.log(stdNAme); //null
console.log(typeof stdNAme);//object //Interview ques

let clgName = null;
console.log(clgName); //null
console.log(typeof clgName);//object //Interview ques
