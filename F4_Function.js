/*
1.function declaration
2. function expression

Anonymous function //no funcation name will be there
Arrow function  //short hand funcation
*/

function test1()
{
    console.log("This is funcation declartion calling.. ")
}

test1()//calling function



let test2 = function()
{
    console.log("This is anonynous function calling.. ")
}

test2()//calling function

let test3= ()=>{
console.log("This is arrow function calling..")
}
test3()//call arrow function  // arrow funcation is used in pw




test("login test", async({page}) => {
    console.log("PW login test")
}
)

test()