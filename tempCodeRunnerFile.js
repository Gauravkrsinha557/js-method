const q5_users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "Diana", age: 30 }
];
let output=q5_users.filter((i)=>{
  if(i.age>=18){
   return (i.age);
  }
})
console.log(output);