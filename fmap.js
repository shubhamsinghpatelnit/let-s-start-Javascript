const coding =["js","ruby","java","py","cpp"];;



const myNum=[1,2,3,4,5,6,7,8,9,10];


const newNums=myNum.filter((num)=> num>4);

console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ] calls the filter method on the myNum array with an arrow function as the callback. The arrow function takes each number (num) as an argument and checks if it is greater than 4. The filter method creates a new array that includes only the numbers that satisfy this condition, resulting in an array of numbers greater than 4 being printed to the console.

const newNums1=[];

myNum.forEach((num)=>{
    if(num>4)
    {
        newNums1.push(num) // [ 5, 6, 7, 8, 9, 10 ] iterates over each number in the myNum array using the forEach method. For each number, it checks if it is greater than 4. If the condition is true, it pushes the number into the newNums1 array. After the loop completes, newNums1 will contain all the numbers from myNum that are greater than 4, and then it prints newNums1 to the console.
    }
});




const arr1=myNum.map((num)=> {return num+10});

console.log(arr1) ; // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] calls the map method on the myNum array with an arrow function as the callback. The arrow function takes each number (num) as an argument and returns the value of that number plus 10. The map method creates a new array that contains the results of calling the provided function on every element in the original array, resulting in a new array where each number from myNum has been increased by 10 being printed to the console.

const arr2=myNum.map((num)=>num*10).map((num)=> num+5);

console.log(arr2) // [ 15, 25, 35, 45, 55, 65, 75, 85, 95, 105 ] calls the map method on the myNum array twice in a chain. The first map takes each number (num) and multiplies it by 10, creating a new array where each number is ten times its original value. The second map then takes each of those multiplied numbers and adds 5 to it, resulting in a new array where each number from the first map has been increased by 5. Finally, it prints the resulting array to the console.    


const arr3=myNum.map((num)=>num*10).map((num)=> num+5).filter((num)=>num>=40);

console.log(arr3) // [ 45, 55, 65, 75, 85, 95, 105 ] calls the map method on the myNum array twice in a chain to first multiply each number by 10 and then add 5 to each of those results. After that, it calls the filter method on the resulting array to keep only the numbers that are greater than or equal to 40. The final output is an array of numbers that have been transformed by the map operations and filtered based on the specified condition, which is then printed to the console.   
// [ 15, 25, 35, 45, 55, 65, 75, 85, 95, 105 ] is the intermediate result after the map operations, and [ 45, 55, 65, 75, 85, 95, 105 ] is the final result after applying the filter.




const initialValue=0;
const sumWithInitial=myNum.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue);

console.log(sumWithInitial) // 55 calls the reduce method on the myNum array with an arrow function as the callback and an initial value of 0. The reduce method takes the callback function, which takes an accumulator and the current value as arguments, and applies it cumulatively to the elements of the array from left to right. In this case, it sums up all the numbers in the myNum array starting with an initial value of 0, resulting in the total sum of 55 being printed to the console.


// in first operasion, accumulator is 0 (the initial value) and currentValue is 1 (the first element of the array). The function returns 0 + 1 = 1, which becomes the new accumulator for the next iteration.
 
// In the second operation, accumulator is 1 (the result from the first iteration) and currentValue is 2 (the second element of the array). The function returns 1 + 2 = 3, which becomes the new accumulator for the next iteration.

// In the third operation, accumulator is 3 (the result from the second iteration) and currentValue is 3 (the third element of the array). The function returns 3 + 3 = 6, which becomes the new accumulator for the next iteration.

// This process continues until all elements of the array have been processed, resulting in the final sum of 55 being printed to the console.       

const myTotal=myNum.reduce(function(acc,curval){
    console.log(`acc: ${acc} and currval: ${curval}`)  ; // 0 1 1 3 3 4 6 5 10 6 15 7 21 8 28 9 36 10 45 prints the current value of the accumulator and the current value being processed in each step of the reduce operation. The accumulator starts with the initial value of 0 and is updated with the sum of the previous accumulator and the current value at each step, while the current value iterates through each element of the myNums array. This allows you to see how the accumulator evolves as it processes each element of the array, ultimately leading to the final total being printed to the console.
    return acc+curval; // 55 returns the updated value of the accumulator by adding the current value to it. This is the function that is executed for each element in the myNums array during the reduce operation, and it contributes to calculating the final total sum of the array, which is printed to the console as 55.

},0);

console.log(myTotal) // 55 prints the final total calculated by the reduce method to the console, which is the sum of all the numbers in the myNum array starting with an initial value of 0.   
