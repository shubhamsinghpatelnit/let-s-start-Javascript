const course = {
    coursename:"js in Hindi",
    courseprice:999,
    courseInstructor:"Shubham",
    courseplatform:"Udemy"
}
const {courseInstructor}=course; // destructuring assignment to extract the value of courseInstructor property from course object and assign it to a new variable courseInstructor

console.log(courseInstructor); // "Shubham" gives the value of courseInstructor variable which is "Shubham"

const {courseInstructor:instructor}=course; // destructuring assignment to extract the value of courseInstructor property from course object and assign it to a new variable instructor

console.log(instructor); // "Shubham" gives the value of instructor variable which is "Shubham"

//API response example

// {
//     "name" : "Shubham",
//     "coursename":"js in Hindi",
//     "courseprice":999,
//     "courseInstructor":"Shubham",
//     "courseplatform":"Udemy"
// }


