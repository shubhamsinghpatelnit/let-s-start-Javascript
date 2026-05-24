// falsy values: 0, "", null, undefined, NaN(not a number), false
// truthy values: all values that are not falsy
  // Ternary operator: condition ? expression1 : expression2

  const arr=[1,2,3,4,5,6];

  for(const it of arr)
  {
    console.log(it) // 1 2 3 4 5 6 prints each element of the arr array to the console using a for...of loop, which iterates over the values of the array.

  }

  // Map method: creates a new array by applying a function to each element of the original array.

  const mp=new Map();
  mp.set('name','shubham');
  mp.set('age',25);
  mp.set('city','delhi');

  for(const [key,value] of mp)
  {
    console.log(`${key}: ${value}`) // name: shubham age: 25 city: delhi prints each key-value pair of the mp Map to the console using a for...of loop, which iterates over the entries of the Map. The destructuring assignment is used to extract the key and value from each entry, and then they are logged to the console in a formatted string.
  } 
   // MaP => Map objects are collections of key-value pairs where the keys can be of any data type, and they maintain the order of insertion. They provide methods for adding, retrieving, and deleting key-value pairs, as well as iterating over the entries in the Map. it is unique and can be used as a key in a Map, whereas in an object, keys are always strings or symbols. Additionally, Maps have a size property that returns the number of key-value pairs in the Map, while objects do not have a built-in way to determine their size.
   
   console.log(mp);
   console.log(mp.get('name')) // shubham prints the value associated with the key 'name' in the mp Map to the console, which is 'shubham'.
   console.log(mp.has('age')) // true checks if the key 'age' exists in the mp Map and prints the result to the console, which is true because the key 'age' is present in the Map.
   console.log(mp.size) // 3 prints the number of key-value pairs in the mp Map to the console, which is 3 because there are three entries in the Map: 'name', 'age', and 'city'.


   for(const it of mp.keys())
   {
    console.log(it) // name age city prints each key of the mp Map to the console using a for...of loop, which iterates over the keys of the Map using the keys() method.

   }
   for(const key of mp)
   {
    console.log(key) // [ 'name', 'shubham' ] [ 'age', 25 ] [ 'city', 'delhi' ] prints each key-value pair of the mp Map to the console using a for...of loop, which iterates over the entries of the Map. Each entry is an array containing the key and value, which is logged to the console. 

   }

   const obj={
    name:'shubham',
    age:25,
    city:'delhi'            
   }

   for(const key in obj)
   {
    console.log(`${key}: ${obj[key]}`) // name: shubham age: 25 city: delhi prints each key-value pair of the obj object to the console using a for...in loop, which iterates over the enumerable properties of the object. The key is accessed using bracket notation to retrieve the corresponding value, and both are logged to the console in a formatted string.
   }

//    for(const [key , value] of obj)
//    {
//     console.log(`${key}: ${value}`) // TypeError: obj is not iterable throws a TypeError because the for...of loop expects an iterable object, but obj is a plain JavaScript object, which is not iterable. To iterate over the key-value pairs of an object, you can use a for...in loop or Object.entries() method instead.
    
//    }

for(const key in arr)
{
    console.log(key) // 0 1 2 3 4 5 prints the index of each element in the arr array to the console using a for...in loop, which iterates over the enumerable properties of the array. In this case, it iterates over the indices of the array elements, which are treated as keys in the context of the for...in loop.
    console.log(arr[key]) // 1 2 3 4 5 6 prints each element of the arr array to the console by accessing it using the index (key) obtained from the for...in loop. The key is used to retrieve the corresponding value from the array, which is then logged to the console.    

}

 
// Call back

const coding=["js","ruby","java","py","cpp"];
coding.forEach( function(val)
{
    console.log(val); // js ruby java py cpp prints each element of the coding array to the console using the forEach method, which takes a callback function as an argument. The callback function is executed for each element in the array, and the current element is passed as an argument (val) to the function, which then logs it to the console.   

})

coding.forEach((val)=>{
    console.log(val) // js ruby java py cpp prints each element of the coding array to the console using the forEach method with an arrow function as the callback. The arrow function takes the current element (val) as an argument and logs it to the console, resulting in each element of the array being printed on a new line.   

})

function greet(name)
{
    console.log(`Welcome ${name}`) // Welcome shubham defines a function greet that takes a name as an argument and logs a welcome message to the console that includes the provided name. When the function is called with the argument 'shubham', it will print 'Welcome shubham' to the console.
}

greet('shubham') // Welcome shubham calls the greet function with the argument 'shubham', which results in the welcome message being printed to the console with the name included.

coding.forEach(greet) // {Welcome js Welcome ruby Welcome java Welcome py Welcome cpp calls the forEach method on the coding array, passing the greet function as a callback. This results in the greet function being called for each element in the coding array, with the current element passed as an argument to the greet function. As a result, it will print a welcome message for each programming language in the array to the console.    
// Welcome shubham
// Welcome js
// Welcome ruby
// Welcome java
// Welcome py
// Welcome cpp

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr) // js 0 [ 'js', 'ruby', 'java', 'py', 'cpp' ] ruby 1 [ 'js', 'ruby', 'java', 'py', 'cpp' ] java 2 [ 'js', 'ruby', 'java', 'py', 'cpp' ] py 3 [ 'js', 'ruby', 'java', 'py', 'cpp' ] cpp 4 [ 'js', 'ruby', 'java', 'py', 'cpp' ] calls the forEach method on the coding array with an arrow function as the callback. The arrow function takes three parameters: item (the current element), index (the index of the current element), and arr (the entire array). For each element in the coding array, it logs the current item, its index, and the entire array to the console, resulting in each element being printed along with its index and the full array on a new line.
})


const myCoding=[
    {
        language:'javaScript',
        languageFileName:"js"

    },
    {
        language:'Ruby',    
        languageFileName:"rb"
    },
    {
        language:'Python',
        languageFileName:"py"   
    },
]

myCoding.forEach((item)=>{
    console.log(`Language: ${item.language}, File Extension: ${item.languageFileName}`) // Language: javaScript, File Extension: js Language: Ruby, File Extension: rb Language: Python, File Extension: py calls the forEach method on the myCoding array with an arrow function as the callback. The arrow function takes each item (which is an object) as an argument and logs a formatted string to the console that includes the language and its corresponding file extension from each object in the array. As a result, it will print the language and file extension for each programming language in the myCoding array to the console.  
    
})
