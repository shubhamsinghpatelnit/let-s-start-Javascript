// const user=new Object(); // creates a new empty object using the Object constructor

let user={
    name:"Shubham",
    fullName:{
        firstName:"Shubham",
        lastName:"Singh"
     },
     age:22

    }

    console.log(user.fullName.firstName); // "Shubham" gives the value of firstName property of fullName object which is a property of user object

    console.log(user["fullName"]["lastName"]); // "Singh" gives the value of lastName property of fullName object which is a property of user object

    user.fullName.middleName="Kumar"; // adds a new property middleName to fullName object which is a property of user object with the value "Kumar"
    

    const obj1={
        1:"a",
        2:"b",
        3:"c"
    }
    const obj2={
        4:"d",
        5:"e",
        6:"f"
    }
    const obj3={
        obj1,obj2
    }
    console.log(obj3); // {obj1: {…}, obj2: {…}} gives the value of obj3 object which contains obj1 and obj2 objects as properties

    const obj4=Object.assign({},obj1,obj2); // creates a new object obj4 by merging obj1 and obj2 objects using Object.assign() method

    console.log(obj4); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"} gives the value of obj4 object which contains all the properties of obj1 and obj2 objects

    const obj5={...obj1,...obj2}; // creates a new object obj5 by merging obj1 and obj2 objects using spread operator

    console.log(obj5); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"} gives the value of obj5 object which contains all the properties of obj1 and obj2 objects


    console.log(Object.keys(user)); // ["name", "fullName", "age"] gives an array of keys of user object
    
    console.log(Object.values(user)); // ["Shubham", {…}, 22] gives an array of values of user object

    console.log(Object.entries(user)); // [["name", "Shubham"], ["fullName", {…}], ["age", 22]] gives an array of key-value pairs of user object


    consolr.log(user.hasOwnProperty("name")); // true gives a boolean value indicating whether user object has the property name or not

    console.log(user.hasOwnProperty("gender")); // false gives a boolean value indicating whether user object has the property gender or not    


    