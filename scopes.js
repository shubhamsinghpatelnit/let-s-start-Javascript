var c=300;

if(true)
{
    
    var c=100;
}

console.log(c)// 100 prints the value of variable c to the console, which is 100 because the var keyword allows for variable hoisting and re-declaration, so the variable c inside the if block overwrites the outer variable c.

let a=10;
if(1)
{
    let a=20;
}

console.log(a) // 10 prints the value of variable a to the console, which is 10 because the let keyword does not allow for variable hoisting and re-declaration, so the variable a inside the if block is a different variable that does not affect the outer variable a.

const b=50;
if(1)
{
    const b=100;
}

console.log(b) // 50 prints the value of variable b to the console, which is 50 because the const keyword does not allow for variable hoisting and re-declaration, so the variable b inside the if block is a different variable that does not affect the outer variable b. 



console.log(addone(3)) // 4 calls the function addone with the argument 3, which returns the value of 3 plus 1, and then prints it to the console.

function addone(num)
{
    return num+1; // 4 defines a function addone that takes a number as an argument and returns the value of that number plus 1.
}


 console.log(addtwo(3)) // it's give error because  the function addtwo is defined as a function expression using the const keyword, which does not allow for hoisting. Therefore, the function addtwo is not accessible before its declaration, resulting in a ReferenceError when trying to call it before it is defined.
const addtwo=function(num)
{
    return num+2; // 5 defines a function addtwo that takes a number as an argument and returns the value of that number plus 2.
}