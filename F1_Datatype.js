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


console.log("===============symbol=======");
/*
It is used to create unique keys in JS object
NA for automation

Object ways
===============
1. Object Literal
2. Using class
3. Using constructor funcation
4. Using prototypes
*/
console.log("-------Object Literal--------");




let user = {}
console.log(user); //{}
console.log(typeof user); //object

//Array
let userId = [10,20,30];
console.log(userId);  //[10,20,30]
console.log(typeof userId); // object

let person = {
  id: 101,
  name: 'Sarang'
}
console.log(person);// {id: 101, name: 'Sarang'}

/*
Access property from object

1. Dot Notation
ObjectName.Key

2. Bracket Notation
ObjectName["Key"]
*/

console.log(person.id);
console.log(person["name"]);

//Add new property
person.address = "Pune";
console.log(person);

//Modify a property
person.id = 200;
console.log(person);

//delete a property
delete person.address;
console.log(person);

//symbol type data
let profile1 = Symbol("QA");
console.log(profile1); // Symbol(QA)
console.log(typeof profile1); //symbol

let product = {
  name : "Macbook Pro",
  price : 877773
}
console.log(product);

//To add unique property to an object we use symbol type
let pid = Symbol("id");

//add symbol property to object
product[pid]= 8888;

console.log(product); //{ name: 'Macbook Pro', price: 877773, Symbol(id): 8888 }

product.pid = 1010;
console.log(product); //{ name: 'Macbook Pro', price: 877773, pid: 1010, Symbol(id): 8888 }

//product pid got override
product.pid = 2020;
console.log(product); //{ name: 'Macbook Pro', price: 877773, pid: 2020, Symbol(id): 8888 }

delete product.pid;
console.log(product); //{ name: 'Macbook Pro', price: 877773, Symbol(id): 8888 }

//to modify symbol type data
product[pid] = 9999;
console.log(product); //{ name: 'Macbook Pro', price: 877773, Symbol(id): 9999 }

