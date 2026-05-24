function sayMyName(name)
{
    console.log("My name is "+name);
}

sayMyName("Shubham"); // "My name is Shubham" calls the function sayMyName and passes the argument "Shubham" to it, which is then printed to the console.

function add(a,b)
{
    return a+b;
}

console.log(add(5,10)); // 15 calls the function add with arguments 5 and 10, which returns the sum of the two numbers, and then prints it to the console.  

function price(...args)
{
    return args;
}

console.log(price(100,200,300,1000)); // [100, 200, 300, 1000] calls the function price with multiple arguments (100, 200, 300, and 1000), which are collected into an array using the rest parameter syntax (...args), and then returns that array, which is printed to the console.


const user={
    name:"Shubham",
    age:25,
    city:"Delhi"
}

function handleUser(obj)
{
    console.log("User name is "+obj.name); // "User name is Shubham" accesses the name property of the obj parameter and prints it to the console.
    console.log("User age is "+obj.age);
    console.log("User city is "+obj.city);
}

handleUser(user); // calls the function handleUser and passes the user object as an argument, which allows the function to access the properties of the user object and print them to the console.


handleUser({
    name:"Shubham",
    age:25,
    city:"Delhi"        

}) // calls the function handleUser and passes an object literal as an argument, which allows the function to access the properties of the object and print them to the console.

const myNEWaRRAY=[1,2,3,4,5];

function sumArray(arr)
{
    return arr[3]; // 4 defines a function sumArray that takes an array as an argument and returns the value at index 3 of the array, which is 4 in this case.
}



