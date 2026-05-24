const user={
    username:'john',
    price:99,

    welcomeMessage:function(){
        console.log(`Welcome ${this.username}, your price is ${this.price}`);

        console.log(this) // { username: 'john', price: 99, welcomeMessage: [Function: welcomeMessage] } prints the value of this to the console, which is the user object itself because the welcomeMessage function is a method of the user object and is called using the dot notation on the user object.   

    }
}

user.welcomeMessage(); // Welcome john, your price is 99 calls the welcomeMessage function of the user object, which prints a welcome message to the console that includes the username and price properties of the user object.
user.username='shubham';
user.welcomeMessage(); // Welcome shubham, your price is 99 updates the username property of the user object to 'shubham' and then calls the welcomeMessage function again, which prints a new welcome message to the console that reflects the updated username.

console.log(this) // {} prints the value of this to the console, which is an empty object because in the global scope, this refers to the global object, which is an empty object in strict mode.   

const chai=function(){
    let a=10;
    console.log(this.a) // {} prints the value of this to the console, which is an empty object because in a regular function, this refers to the global object, which is an empty object in strict mode.   
}

const arrowchai=()=>{
    let a=20;
    console.log(this.a) // {} prints the value of this to the console, which is an empty object because in an arrow function, this refers to the enclosing lexical context, which is the global scope in this case, and since there is no a property defined in the global scope, it returns undefined. However, since we are in strict mode, it will not throw an error and will simply return undefined.      

}

chai(); // undefined calls the chai function, which logs the value of this.a to the console, resulting in undefined because this refers to the global object and there is no a property defined on it.
arrowchai(); // undefined calls the arrowchai function, which logs the value of this.a to the console, resulting in undefined because this refers to the enclosing lexical context (the global scope) and there is no a property defined on it. 

const add=(a,b)=>{
    return a+b;
}
console.log(add(2,3)); // 5 calls the add function with the arguments 2 and 3, which returns the value of 2 plus 3, and then prints it to the console.

const addone=(num)=> num+1;
console.log(addone(5));    // 6 calls the addone function with the argument 5, which returns the value of 5 plus 1, and then prints it to the console.

const name=()=> {username:'shubham'};
console.log(name()) // undefined calls the name function, which is an arrow function that returns an object literal. However, since the object literal is not wrapped in parentheses, it is interpreted as a block of code rather than an object, resulting in undefined being returned when the function is called. To fix this issue, the object literal should be wrapped in parentheses like this: const name = () => ({ username: 'shubham' });

const name1=()=> ({username:'shubham'});
console.log(name1()) // { username: 'shubham' } calls the name1 function, which is an arrow function that returns an object literal with a username property set to 'shubham', and then prints the returned object to the console.  


