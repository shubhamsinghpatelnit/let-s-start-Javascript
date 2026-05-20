//Object


const user={
    name:"Shubham",
    "full name" :"Shubham Singh",
    age:22,
    city:"Agartala",
    isStudent:true,
    hobbies:["coding","gaming","traveling"],
    address:{
        street:"123 Main St",
        city:"Agartala",
        state:"Tripura",
        zipCode:"799001"
    }

}

  console.log(user.name); // "Shubham" gives the value of name property of user object

  console.log(user["age"]); // 22 gives the value of age property of user object

  console.log(user.hobbies[0]); // "coding" gives the first element of hobbies array which is a property of user object

  user.email="shubham@example.com"; // adds a new property email to user object with the value "

  user.age=23; // updates the value of age property of user object to 23

  //Object.freeze(user); // freezes the user object which means we cannot add, delete or update any property of user object

    user.city="Delhi"; // does not update the value of city property of user object because the object is frozen
    console.log(user.city); // "Agartala" gives the value of city property of user object which is not updated because the object is frozen

    user.greeting=function(){
     
        console.log("HI Mikasa ! How are you ?"); // adds a new method greeting to user object which logs a greeting message to the console

        console.log(`My name is ${this.name} and I am ${this.age} years old.`); // logs a message to the console using template literals and this keyword to access the name and age properties of user objectm
    }

    console.log(user.greeting); // undefined gives the value of greeting property of user object which is undefined because the object is frozen

    console.log(user.greeting()); // TypeError: user.greeting is not a function gives an error because the greeting method is not added to user object due to freezing of the object



