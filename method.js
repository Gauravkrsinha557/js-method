// /* ==========================================================================
//    PART 1: FILTER (10 QUESTIONS)
//    ========================================================================== */

// // Q1. Filter Even Numbers
// // Given an array of integers, return a new array containing only even numbers.
// const q1_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 22];

let evenoutput=q1_numbers.filter((num)=>num%2==0);
console.log(evenoutput);


// // Q2. Filter Strings by Length
// // Given an array of words, return only the words that have 5 or more characters.
// const q2_words = ["apple", "dog", "banana", "cat", "elephant", "ox", "cherry"];


// // Q3. Filter Words Starting with a Specific Letter
// // Given an array of names, return only those that start with the letter 'J' (case-insensitive).
// const q3_names = ["John", "Sarah", "james", "Michael", "jessica", "David"];


// // Q4. Filter Falsy Values
// // Given an array containing mixed data types, remove all falsy values (false, null, 0, "", undefined, NaN).


// // Q5. Filter Adults from Objects
// // Given an array of user objects, return an array of users who are 18 years old or older.
// const q5_users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 15 },
//   { name: "Diana", age: 30 }
// ];
let output = q5_users.filter((i)=>{
  if(i.age>=18){
   return i.age;
  }
}).map((i)=>{
  return i.age;
})
console.log(output);


// // Q6. Filter In-Stock Products Within Budget
// // Given an array of products, return products that are currently in stock AND cost less than $100.
// const q6_products = [
//   { title: "Keyboard", price: 75, inStock: true },
//   { title: "Monitor", price: 200, inStock: true },
//   { title: "Mouse", price: 25, inStock: false },
//   { title: "Headphones", price: 90, inStock: true }
// ];
// let output=q6_products.filter((i)=>{
//   return i.inStock===true && (i.price<100);
// }).map((i)=>{
//   return i.title;
// })
// console.log(output);

// // Q7. Filter Unique Values (Deduplication)
// // Using filter and indexOf, return a new array with all duplicate values removed.
// const q7_items = ["apple", "banana", "apple", "orange", "banana", "grape"];
// const q7_items = ["apple", "banana", "apple", "orange", "banana", "grape"];

// let output = q7_items.filter((i,index)=>{
//   if(q7_items.indexOf(i)===index){
//     return i;
//   }
// })
// console.log(output);


// // Q8. Filter Palindromes
// // Given an array of words, return only the words that read the same backwards as forwards.
// const q8_words = ["racecar", "level", "javascript", "noon", "react", "radar"];
// // Q8. Filter Palindromes
// // Given an array of words, return only the words that read the same backwards as forwards.
// const q8_words = ["racecar", "level", "javascript", "noon", "react", "radar"];

// let output = q8_words.filter((i)=>{
//   let start = 0;
//   let last =i.length - 1;

//   while(last>start){

//     if(i[start]!== i[last]) {
//       return false;
//       }
//       start++;
//       last--;
//       }
//     return true;
  
//   })
//   console.log(output);


// // Q9. Filter Students with Passing Grades Across All Subjects
// // Given an array of students with a list of subject scores, return students whose every score is >= 50.
// const q9_students = [
//   { name: "Emma", scores: [80, 75, 90] },
//   { name: "Liam", scores: [45, 80, 70] },
//   { name: "Sophia", scores: [55, 60, 65] }
// ];
// let output = q9_students.filter((i)=>{
//   for(let j = 0; j < i.scores.length; j++){
//     if (i.scores[j]<50){return false;}
//   }
//   return true;
// })
// console.log(output)

// // Q10. Filter by Dynamic Property Search
// // Given an array of tasks, return only tasks where status is "completed" and priority is "high".
// const q10_tasks = [
//   { id: 1, title: "Deploy app", status: "completed", priority: "high" },
//   { id: 2, title: "Fix bug", status: "pending", priority: "high" },
//   { id: 3, title: "Write tests", status: "completed", priority: "low" },
//   { id: 4, title: "Update docs", status: "completed", priority: "high" }
// ];
// let output = q10_tasks.filter((i)=>{
//   if(i.status==="completed" && i.priority==="high"){
//     return i
//   }
// }).map((i)=>{
//   return i.title;
// })
// console.log(output);




// /* ==========================================================================
//    PART 2: MAP (10 QUESTIONS)
//    ========================================================================== */

// // Q11. Square Each Number
// // Given an array of numbers, return a new array where each number is squared.
// const q11_numbers = [2, 4, 6, 8, 10];
// let output = q11_numbers.map((i)=>{
//   return i=i*i;
// })
// console.log(output);

// // Q12. Convert Array of Words to Uppercase
// // Given an array of strings, return an array where every string is converted to uppercase.
// const q12_strings = ["react", "node", "typescript", "express"];
// let output = q12_strings.map((i)=>{
//   return i.toUpperCase();
// })
// console.log(output);


// // Q13. Convert Celsius to Fahrenheit
// // Given an array of temperatures in Celsius, return an array converted to Fahrenheit (F = C * 9/5 + 32).
// const q13_celsius = [0, 15, 25, 30, 40];
// let output = q13_celsius.map((i)=>{
//   return (i * 9/5) + 32;
// })
// console.log(output);

// // Q14. Extract Full Names
// // Given an array of user objects, return an array of formatted full names ("FirstName LastName").
// const q14_people = [
//   { firstName: "Ada", lastName: "Lovelace" },
//   { firstName: "Alan", lastName: "Turing" },
//   { firstName: "Grace", lastName: "Hopper" }
// ];
// let output = q14_people.map((i)=>{
//   let fullName = `${i.firstName} ${i.lastName}`;

//  q14_people[fullName] = fullName;

//  return fullName;
// })
// console.log(output);


// // Q15. Extract Specific Property Array
// // Given an array of user objects, extract just their email addresses into a simple string array.
// const q15_users = [
//   { id: 1, name: "Sam", email: "sam@example.com" },
//   { id: 2, name: "Kelly", email: "kelly@example.com" },
//   { id: 3, name: "Alex", email: "alex@example.com" }
// ];
// let output = q15_users.map((i)=>{
//   return i.email;
// })
// console.log(output);

// // Q16. Add Computed Property to Objects
// // Given an array of products with net prices, return a new array of objects adding a `totalPrice` property (price + 10% tax). Do not mutate original objects.
// const q16_products = [
//   { item: "Book", price: 20 },
//   { item: "Bag", price: 50 },
//   { item: "Pen", price: 5 }
// ];
// let output = q16_products.map((i)=>{
//   let totalPrice = i.price + (i.price * 0.1);
//   //console.log(totalPrice);

//   let newobj = {...i};
//   newobj["totalPrice"] = totalPrice;

//   return newobj;
// })
// console.log (output);

// // Q17. String Length Mapper
// // Given an array of words, return an array of objects where each object has `{ word: string, length: number }`.
// const q17_words = ["javascript", "developer", "code", "interview"];
// let output = q17_words.map((i) => {
//   let obj = {};
//   obj['word'] = i;
//   obj['length'] = i.length;
//   return obj;
// });
// console.log(output);


// // Q18. Normalize Date Strings
// // Given an array of date strings in "YYYY-MM-DD" format, map them into "DD/MM/YYYY" format.
// const q18_dates = ["2026-01-15", "2025-12-31", "2024-07-04"];
const q18_dates = ["2026-01-15", "2025-12-31", "2024-07-04"];

let output = q18_dates.map((i)=>{
  let part = i.split("-");
 
  return part[2] + "/" +part[1] + "/"+part[0];
})
console.log(output);

// // Q19. Map Array of Numbers to Currency Formats
// // Given an array of numbers, return an array of formatted USD currency strings (e.g., "$12.00").
// const q19_amounts = [12, 5.5, 100, 49.99];
const q19_amounts = [12, 5.5, 100, 49.99];
let output = q19_amounts.map((i)=>{
  i = i.toFixed(2);
  i = `$${i}`;
  return i;
})
console.log(output);

// // Q20. Index-Based Mapping
// // Given an array of items, return an array of strings numbered starting from 1 (e.g., "1. Milk", "2. Eggs").
// const q20_groceries = ["Milk", "Eggs", "Bread", "Butter"];
const q20_groceries = ["Milk", "Eggs", "Bread", "Butter"];
let output = q20_groceries.map((i,index)=>{
  i = `${index +1}. ${i}`
  return i;
})
console.log(output);

// /* ==========================================================================
//    PART 3: REDUCE (10 QUESTIONS)
//    ========================================================================== */

// // Q21. Sum of Array Elements
// // Given an array of numbers, calculate and return the total sum.
// const q21_numbers = [10, 20, 30, 40, 50];
const q21_numbers = [10, 20, 30, 40, 50];

let output = q21_numbers.reduce((total,i)=>{
     total=total+i;
     return total;
},0);
console.log(output); 

// // Q22. Find Maximum Number
// // Given an array of numbers, find the largest number using reduce (without Math.max).
// const q22_numbers = [34, 78, 12, 90, 56, 90, 23];
const q22_numbers = [34, 78, 12, 90, 56, 90, 23];
let output = q22_numbers.reduce((maxno,i)=>{
  if (i > maxno){
    return i;
  }
  return maxno; 
},0);
console.log(output);

// // Q23. Word Frequency Count
// // Given an array of fruit names, return an object showing the count of each fruit.
// const q23_fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const q23_fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let output = q23_fruits.reduce((acc,i)=>{
  if(acc[i]){
  acc[i]= ++acc[i];
  }
  else{
    acc[i]=1;
  }
return acc;
}, {});
console.log(output);


// // Q24. Flatten a 2D Array
// // Given a nested array of arrays, flatten it into a single-level array without using `.flat()`.
// const q24_nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];
 const q24_nested = [[1, 2], [3, 4, 5], [55], [7, 8, 9]];

let output = q24_nested.reduce((flatArr,i)=>{
  flatArr = flatArr.concat(i);
  return flatArr;
}, [])
console.log(output);

// // Q25. Calculate Cart Grand Total
// // Given an array of shopping cart items with price and quantity, calculate the final total bill.
// const q25_cart = [
//   { title: "Laptop", price: 900, qty: 1 },
//   { title: "Mouse", price: 25, qty: 2 },
//   { title: "Cable", price: 10, qty: 3 }
// ];
let output = q25_cart.reduce((acc,i)=>{
  acc = acc + (i.price * i.qty);
  return acc;
}, 0);
console.log(output);

// // Q26. Group Objects by Property
// // Given an array of employees, group them by department into an object where keys are department names and values are arrays of names.
// const q26_employees = [
//   { name: "Alice", department: "Engineering" },
//   { name: "Bob", department: "Sales" },
//   { name: "Charlie", department: "Engineering" },
//   { name: "Diana", department: "Marketing" },
//   { name: "Ethan", department: "Sales" }
// ];
let output = q26_employees.reduce((acc,i)=>{
  if(acc[i.department]){
    acc[i.department].push(i.name);
  }
  else{
    acc[i.department]=[i.name];
  }
  return acc;
}, {})
console.log(output);

// if (acc[key]) {
//     acc[key].push(value);
// } else {
//     acc[key] = [value];
// }


// // Q27. Convert Array of Objects to Lookup Dictionary (Map by Key)
// // Given an array of users, transform it into an object indexed by user `id`.
// const q27_users = [
//   { id: "u101", name: "Sarah", role: "admin" },
//   { id: "u102", name: "Mike", role: "editor" },
//   { id: "u103", name: "Anna", role: "viewer" }
// ];
let output = q27_users.reduce((acc, i) => {
  acc[i.id] = i;
  return acc;
}, {});
console.log(output);

// // Q28. Find the Longest String
// // Given an array of strings, use reduce to return the single longest string.
// const q28_phrases = ["short", "tiny", "a very long sentence here", "medium length"];
const q28_phrases = ["short", "tiny", "a very long sentence here", "medium length"];
let largest = 0;
let output = q28_phrases.reduce((acc,i)=>{
  let charlen = i.length;  //short=5

  if(charlen > largest){
   largest = charlen;
   acc = i;
  }
  
  return acc
}, "");
console.log(output);

// // Q29. Count Occurrences of Characters in a String
// // Given a single string, convert to array and use reduce to count occurrences of each character.
// const q29_string = "javascript";
const q29_string = "javascript";
newarr = [...q29_string];
console.log(newarr);

let output = newarr.reduce((acc,i)=>{
  let count = 1;
  if(!acc[i]){
    acc[i]= count;
  }
  else{
    acc[i]= ++count;
  }
return acc;
},{});
console.log(output);

// // Q30. Pipeline Function Composition via Reduce
// // Given an initial number `x = 5` and an array of simple unary functions `[double, addTen, square]`,
// // use reduce to pipe the input through each function sequentially (x -> double(x) -> addTen(...) -> square(...)).
// const double = (n) => n * 2;
// const addTen = (n) => n + 10;
// const square = (n) => n * n;
// const q30_pipeline = [double, addTen, square];
// const q30_initialValue = 5;




// > Write a function/method which converts snake case strings to pascal case.
// Input: "this_is_snake_case"   ------> Snake Case
// Output: "ThisIsSnakeCase"     ------> Pascal Case */

let input = "this_is_snake_case";
 




https://quick-bin.netlify.app/

https://www.youtube.com/watch?v=1intnGVvh3A

https://altcampus.com/roadmaps/web-development/javascript-fundamentals


let str = "gaurav"
// output = "varuag"
let output = "";
for(let i =str.length-1; i>=0;i--){
   output = output + str[i]
   console.log(output,i)
}

let str = "malti";
let arr = str.split("");
console.log(arr);
let revarr = arr.reverse();
console.log(revarr);
let joinarr = revarr.join("");
console.log(joinarr);




// > Write a function/method which converts snake case strings to pascal case.
// Input: "this_is_snake_case"   ------> Snake Case
// Output: "ThisIsSnakeCase"     ------> Pascal Case */

let input = "this_is_snake_case";

let spitarr = input.split("_");
console.log(spitarr);

for(let i=0; i<spitarr.length; i++){
  let strI = spitarr[i].split("");
  //console.log(strI);
  //console.log(strI[0]);
  let z = strI[0].toUpperCase();
  //console.log(z);

  let joinstr = strI.join("");
}
  let joinarr = spitarr.join("");
  console.log(joinarr);


  write a program to find subtraction of two NodeList.apply
  write a program to find quotient and remainder.NodeList
  write a program to find the simple interest .NodeList


  function pascalCase(str){
  let arr = str.split("_")
  let output = arr.map((elm)=>{
    let final = elm.charAt(0).toUpperCase() + elm.slice(1,elm.length)
    return final
  })
 return output.join("")
}

console.log(pascalCase("this_is_snake_case"))