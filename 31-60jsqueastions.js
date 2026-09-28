// Q31. Filter Odd Numbers
// Given an array of integers, return a new array containing only odd numbers.
const q31_numbers = [11, 24, 37, 42, 55, 68, 73, 80, 91];

let output = q31_numbers.filter((i)=>{
  if(i%2!==0){
  return i;
  }
});
console.log(output);

// Q32. Filter Words by Maximum Length
// Return only the words that have 4 or fewer characters.
const q32_words = ["cat", "elephant", "dog", "lion", "tiger", "ox", "horse"];
let output = q32_words.filter((i)=>{
  if (i.length>4){
    return i;
  }
})
console.log(output);

// Q33. Filter Names Ending with a Specific Letter
// Return only the names that end with the letter "a", case-insensitive.
const q33_names = ["Anna", "John", "Sophia", "Michael", "Emma", "David", "Olivia"];
let output = q33_names.filter((i)=>{
  if(i.includes('a')){
    return i;
  }
})
console.log(output);


// Q34. Filter Positive Numbers
// Given an array containing positive, negative, and zero values,
// return only the positive numbers.
const q34_numbers = [-5, 10, 0, -2, 8, 15, -9, 3];
let output = q34_numbers.filter((i)=>{
  if(i> 0){
    return i;
  }
})
console.log(output);

// Q35. Filter Users by Role
// Return only users whose role is "admin".
const q35_users = [
  { name: "Rahul", role: "user" },
  { name: "Priya", role: "admin" },
  { name: "Aman", role: "editor" },
  { name: "Sneha", role: "admin" },
  { name: "Rohit", role: "user" }
];
let output = q35_users.filter((i)=>{
  if(i.role === 'admin'){
    return i;
  }
})
console.log(output);

// Q36. Filter Products by Price Range
// Return products whose price is between 50 and 150 inclusive.
const q36_products = [
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 200 },
  { name: "Mouse", price: 45 },
  { name: "Headphones", price: 120 },
  { name: "Webcam", price: 150 }
];
let output  = q36_products.filter((i)=>{
  if(i.price>50 && i.price<200){
    return i
  }
}).map((i)=> i.name);
console.log(output);


// Q37. Filter Employees by Salary
// Return employees whose salary is greater than or equal to 50000.
const q37_employees = [
  { name: "Alice", salary: 45000 },
  { name: "Bob", salary: 65000 },
  { name: "Charlie", salary: 52000 },
  { name: "Diana", salary: 39000 }
];
let output = q37_employees.filter((i)=>{
  if(i.salary>=50000){
    return i;
  }
}).map((i)=>i.name);
console.log(output);


// Q38. Filter Numbers Divisible by 3
// Return only the numbers that are completely divisible by 3.
const q38_numbers = [3, 7, 9, 12, 14, 18, 20, 21, 25];
let output = q38_numbers.filter((i)=>{
  if(i%3 === 0){
    return i;
  }
})
console.log(output);

// Q39. Filter Completed Tasks
// Return only tasks whose status is "completed".
const q39_tasks = [
  { id: 1, task: "Study JavaScript", status: "completed" },
  { id: 2, task: "Practice arrays", status: "pending" },
  { id: 3, task: "Build project", status: "completed" },
  { id: 4, task: "Read documentation", status: "pending" }
];
let output = q39_tasks.filter((i)=>{
  if(i.status == 'completed'){
    return i;
  }
}).map((i)=>i.task);
console.log(output);

// Q40. Filter Students Who Passed
// A student passes if their score is 50 or above.
// Return only the students who passed.
const q40_students = [
  { name: "Aarav", score: 45 },
  { name: "Isha", score: 78 },
  { name: "Kabir", score: 52 },
  { name: "Meera", score: 39 },
  { name: "Arjun", score: 90 }
];
let output = q40_students.filter((i)=> i.score >= 50)
  .map((i)=>i.name);
console.log(output);










// Q41. Cube Each Number
// Given an array of numbers, return a new array containing their cubes.
const q41_numbers = [1, 2, 3, 4, 5];
let output1 = q41_numbers.map((i)=> i*i*i)
console.log(output1);

// Q42. Convert Words to Lowercase
// Return a new array where every word is converted to lowercase.
const q42_words = ["JAVASCRIPT", "REACT", "NODE", "EXPRESS"];
let output2 = q42_words.map((i)=> i.toLowerCase())
console.log(output2);


// Q43. Add 10 to Every Number
// Given an array of numbers, return a new array where 10 is added to each number.
const q43_numbers = [5, 10, 15, 20, 25];
let output3 = q43_numbers.map((i)=> i +10)
console.log(output3)

// Q44. Extract User Names
// Given an array of user objects, return an array containing only their names.
const q44_users = [
  { id: 1, name: "Rahul", age: 21 },
  { id: 2, name: "Priya", age: 24 },
  { id: 3, name: "Aman", age: 19 }
];
let output = q44_users.map((i)=>i.name)
console.log(output)


// Q45. Extract Product Prices
// Given an array of products, return an array containing only their prices.
const q45_products = [
  { name: "Laptop", price: 900 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];
let output1 = q45_products.map((i)=>i.price)
console.log(output1)

// Q46. Create Greeting Messages
// Given an array of names, return an array of strings like:
// "Hello, Rahul!"
const q46_names = ["Rahul", "Priya", "Aman", "Sneha"];
let output = q46_names.map((i)=>{
  return `Hello, ${i}`
})
console.log(output)

// Q47. Convert Minutes to Seconds
// Given an array of values in minutes, convert each value to seconds.
const q47_minutes = [1, 2, 5, 10, 15];
let output1 = q47_minutes.map((i)=> i*60)
console.log(output1)

// Q48. Add Full Name Property
// Given an array of people with firstName and lastName,
// return a new array of objects containing the original properties
// plus a `fullName` property.
// Do not mutate the original objects.
const q48_people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Alan", lastName: "Turing" }
];
let output = q48_people.map((i)=>{
  let fullname = `${i.firstName} ${i.lastName}`
  i['fullnameIs'] = fullname;
  return i;
})
console.log(output);

// Q49. Convert Numbers to Even/Odd Labels
// Given an array of numbers, return an array where each number is
// converted into a string such as:
// "2 is even", "5 is odd"
const q49_numbers = [2, 5, 8, 11, 14];
let output1 = q49_numbers.map((i)=>{
  if (i%2 === 0 ){
    return `${i} is even`;
  }
  else{
    return `${i} is odd`;
  }
})
console.log(output1)


// Q50. Add Discounted Price
// Given an array of products, add a `discountedPrice` property.
// The discount is 20%.
// Do not mutate the original objects.
const q50_products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];
let output = q50_products.map((i)=>{
  let discountedPrice = i.price - i.price*0.2 ;
  //console.log(discountedPrice);
  i['newprce'] = discountedPrice;

  return i;
})
console.log(output);




// Q51. Calculate Product of All Numbers
// Given an array of numbers, use reduce to calculate their product.
const q51_numbers = [2, 3, 4, 5];

let output = q51_numbers.reduce((acc,i)=>{
  acc*=i;
  return acc;
}, 1)
console.log(output);

// Q52. Calculate Average
// Given an array of numbers, use reduce to calculate their average.
const q52_numbers = [10, 20, 30, 40, 50];
let output = q52_numbers.reduce((acc,i)=>{
  acc = acc+i;
  return acc;
}, 0)/ q52_numbers.length;
console.log(output);

// Q53. Count Even Numbers
// Use reduce to count how many even numbers are present in the array.
const q53_numbers = [2, 5, 8, 11, 14, 17, 20];
let count = 0;
let output = q53_numbers.reduce((acc,i)=>{
  if(i%2 === 0){
   acc++;
  }
  return acc;
}, 0)
console.log(output);


// Q54. Count Positive Numbers
// Use reduce to count the number of positive values in the array.
const q54_numbers = [-5, 10, -2, 8, 0, 15, -9, 3];

let output = q54_numbers.reduce((acc,i)=>{
  if(i>0){
    acc++;
   // acc+=i;
  }
  return acc;
}, 0);
console.log(output);

// Q55. Find Minimum Number
// Use reduce to find the smallest number in the array.
// Do not use Math.min().
const q55_numbers = [45, 12, 78, 3, 56, 19, 8];
let min = q55_numbers[0];
let output = q55_numbers.reduce((acc,i)=>{
  if(i>=min){
    return min = i;
  }
  else{
    acc++
  }
return acc;
}, 0);
console.log(output);

// Q56. Calculate Total Price of Cart
// Use reduce to calculate the total cost.
// Each item's total is price * quantity.
const q56_cart = [
  { name: "Book", price: 20, quantity: 2 },
  { name: "Pen", price: 5, quantity: 4 },
  { name: "Bag", price: 50, quantity: 1 }
];
let output = q56_cart.reduce((acc,i)=>{
  let total = i.price* i.quantity;
return acc+=total;
}, 0);
console.log(output);

  // Q57. Group Numbers into Even and Odd
  // Use reduce to create an object with two arrays:
  // {
  //   even: [...],
  //   odd: [...]
  // }
  const q57_numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let output = q57_numbers.reduce((acc,i)=>{
    if(i%2===0){
      acc["even"] = i;
    };
    if(i%2===1){
      acc["odd"] = i;
    };
    //console.log(even);

    return acc;
  }, {});
  console.log(output);


// Q57. Group Numbers into Even and Odd
// Use reduce to create an object with two arrays:
// {
//   even: [...],
//   odd: [...]
// }
const q57_numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// Q58. Calculate Total Salary
// Given an array of employees, use reduce to calculate
// the total salary of all employees.
const q58_employees = [
  { name: "Alice", salary: 45000 },
  { name: "Bob", salary: 55000 },
  { name: "Charlie", salary: 60000 },
  { name: "Diana", salary: 40000 }
];


// Q59. Find Employee with Highest Salary
// Use reduce to return the employee object with the highest salary.
const q59_employees = [
  { name: "Alice", salary: 45000 },
  { name: "Bob", salary: 75000 },
  { name: "Charlie", salary: 60000 },
  { name: "Diana", salary: 90000 }
];


// Q60. Build a Word Frequency Object
// Given an array of words, use reduce to create an object
// containing the frequency of each word.
const q60_words = [
  "javascript",
  "react",
  "javascript",
  "node",
  "react",
  "javascript",
  "node"
];

