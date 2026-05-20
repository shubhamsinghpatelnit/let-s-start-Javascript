//  Array 

const myArr=[0,1,2,3,4,5,6,7,true,"shubham", null,undefined,{name:"shubham"},[1,2,3]]; // we can store any type of data in array].

console.log(myArr); // 
let arr=[1,2,3,9,9];
arr.push(10);
console.log(arr); // [1,2,3,9,9,10]

arr.pop();
console.log(arr); // [1,2,3,9,9]; 

arr.unshift(5);
console.log(arr); // [5,1,2,3,9,9]

arr.shift(); // [1,2,3,9,9]

console.log(arr.includes(9));// true gives true if 9 is present in array otherwise false

console.log(arr.indexOf(9)); // 4 gives the index of first 9 in array

console.log(arr.lastIndexOf(9)); // 5 gives the index of last 9 in array

console.log(arr.length); // 5 gives the length of array

console.log(arr.reverse()); // [9,9,3,2,1] reverse the array

console.log(arr.sort()); // [1,2,3,9,9] sort the array in ascending order

console.log(arr.sort((a,b)=>b-a)); // [9,9,3,2,1] sort the array in descending order

console.log(arr.slice(1,4)); // [9,3,2] gives the array from index 1 to 3 (4-1)
console.log(arr);// [9,9,3,2,1] original array is not changed
console.log(arr.splice(1,4)); // [9,3,2,1] gives the array from index 1 to 4 (4-1) and removes those elements from the original array
 console.log(arr);// [9] original array is changed





let marvel=["ironman","thor","hulk","captain america","black widow"];
let dc=["superman","batman","flash","green lantern","aquaman"];

marvel.push(dc); // adds dc array as an element in marvel array
console.log(marvel); // ["ironman","thor","hulk","captain america","black widow",["superman","batman","flash","green lantern","aquaman"]]

marvel.pop(); // removes the last element of marvel array which is dc array

const heroes=marvel.concat(dc); // concatenates marvel and dc arrays and returns a new array
console.log(heroes); // ["ironman","thor","hulk","captain america","black widow","superman","batman","flash","green lantern","aquaman"]

const all_new_heros=[...marvel,...dc]; // concatenates marvel and dc arrays using spread operator and returns a new array
console.log(all_new_heros); // ["ironman","thor","hulk","captain america","black widow","superman","batman","flash","green lantern","aquaman"]





const a1=[1,2,3,[4,5,6,[7,8,9,[10,11]]]];


console.log(a1.flat()); // [1,2,3,4,5,6,[7,8,9,[10,11]]] flattens the array by one level

const newa1=a1.flat(2); // flattens the array by two levels
console.log(newa1); // [1,2,3,4,5,6,7,8,9,[10,11]]

const newa2=a1.flat(Infinity);
console.log(newa2); // [1,2,3,4,5,6,7,8,9,10,11] flattens the array completely


console.log(Array.isArray("Shubham"));// false checks if the given value is an array or not
 console.log(Array.from("Shubham")); // ["S","h","u","b","h","a","m"] creates an array from a string

 console.log(Array.from({name:"shubham"})); // [] creates an array from an object but since the object does not have a length property it returns an empty array
 
 
