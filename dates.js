// DATE

let myDate=new Date();
console.log(myDate); // 2026-05-20T09:01:40.154Z

console.log(myDate.toString()); //Wed May 20 2026 14:32:55 GMT+0530 (India Standard Time)

console.log(typeof myDate); // object

let createdDate=new Date(2026,0,19,5,1); 
console.log(createdDate.toString()); //  // Mon Jan 19 2026 05:01:00 GMT+0530 (India Standard Time)


console.log(Date.now()); //1779268576951 gives the time in milliseconds from 1 jan 1970 to now

console.log(Math.floor(Date.now()/1000)); // 1779268576 gives the time in second from 1 jan 1970 to now


console.log(myDate.getMonth()); // 4 month starts from 0 to 11 we can use date,month ,year,hours,minuts  etc .

 