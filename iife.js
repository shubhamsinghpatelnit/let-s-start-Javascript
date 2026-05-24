// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log('This is an IIFE function');

})() ; // This is an IIFE function defines and immediately invokes a function named chai, which logs the message 'This is an IIFE function' to the console. The parentheses around the function definition and the trailing parentheses at the end are what make it an IIFE, allowing it to execute immediately after being defined.

(()=>{
    console.log('This is an arrow function IIFE'); 
})(); 


((name)=>{
    console.log(`Welcome ${name}, this is an arrow function IIFE`);
})('Shubham') // Welcome Shubham, this is an arrow function IIFE defines and immediately invokes an arrow function that takes a name parameter and logs a welcome message to the console that includes the provided name. The argument 'Shubham' is passed to the function when it is invoked, resulting in the welcome message being printed to the console with the name included.

