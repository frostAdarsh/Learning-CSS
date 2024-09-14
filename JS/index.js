// console.log("Hello world")

//----------------------------------------------------------

// intor to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

// var firstName = "Adarsh"

// use a variable

// console.log(firstName)

// Change value

// firstName = "Frost";
// console.log(firstName)

//-----------------------------------------------------------
// rule for naming variable

// you cannot start with number

// example :-
// 1value (invalid)
// value1 (nvalid)

// var value = 2
// console.log(value)

// you can use only undersore_ or dollar symbol
// first_name(valid)
// _firstname(valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// first name (invalid)

//Convention
//Start with small letter and use camleCase

//-------------------------------------------------------------------

// let keyword
// declear variable with let keyword

// let firstName = "Adarsh"
// console.log(firstName)

//-----------------------------------------------------------

// declare Constant

// const pi =3.14;
// console.log(pi);

//---------------------------------------------------------------------

// String indexing

// let firstName = "Adarsh";
// console.log(firstName[4])
//length of string
// console.log(firstName.length)
// Last Index of string
// console.log(firstName[firstName.length-1])

//-------------------------------------------------------------------
// String are immutable
//trim() is will give  new string and remove extra spaces

// let firstName = "     Adarsh    ";
// console.log(firstName.length)
// firstName = firstName.trim();
// console.log(firstName.length)
// slice() it will start from 0 to n-1
// let firstName = "adarsh";
// let newString = firstName.slice(0,3)
// console.log(newString)

// some other useful string method are toUpperCase() and toLowerCase()

//-----------------------------------------------------------------

// typeof operator

// data type (primitive data type)
// String
// Number
// Boolean
// undefined
// null
// BigInt
// Symbol

// let age = 22;
// let firstName = 'harshit';
// console.log(typeof(age))

// convert number to string
// age = age+ "";
// console.log(typeof(age))
// convert string to number
// let myStr = +"34";
// console.log(typeof myStr)

// let num = 12;
// c =(String(num))
// console.log(typeof c)

//---------------------------------------------------------------
// Falsy and truthy

//Falsy value

//false
//""
//null
//undefined
//0

// Truthy value
// "abc"
// -1 and 1,2 any number

//-------------------------------------------------------------

// how to clone array
// how to concatenate two array

// let array2 = array1.slice(0)
// let array2 = [].concat(array1)
// new way spread operator
// let array2 = [...array1,"item3","item4"]

// let array1 = ["item1","item2"];
// let array3 =["item3","item4","item5"]
// let array2 = [...array1,...array3]
// array1.push("item3")

// console.log(array1)
// console.log(array2)

//-----------------------------------------------------------------
//for loop in array

// let fruits = ["apple","banana","grapes","mango"];
// let fruits2 = []
// for(let i=0;i<fruits.length;i++){
//   fruits2.push(fruits[i].toUpperCase())
// }
// console.log(fruits2);

//-----------------------------------------------------------
// experiment one
// const m = [1,2,3,4,5,6]

// let a = [...m]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

//-------------------------------------------------------------
// Objects

// objects reference type
// array are good but not sufficient
// for real world data
// objects store key value pairs
// objects dont have index

// how to create objects

// const person = {
//     name: "harshit",
//     age:22,
//     hobbies:["guitar","sleeping","listening music"]
// }
// console.log(person)
// console.log(person.hobbies)
// // person.gender ="male";

// console.log(person["age"])
// person["gender"] = "male"
// console.log(person)

//--------------------------------------------------------
// difference between dot and bracket notaion

// const key = "email";
// const person = {
//     name: "harshit",
//     age:22,
//     hobbies:["guitar","sleeping","listening music"]
// }
// person[key] = "adarshknight@gmail.com"
// console.log(person)

//--------------------------------------------------------

// how to iterate object
// const person = {
//     name: "harshit",
//     age:22,
//    "person hobbies":["guitar","sleeping","listening music"]
// }

// for(let key in person){
//     console.log(`${key} :${person[key]}`)
// }

//------------------------------------------------------
// object inside array
// very useful in real world applications

// const users = [
//   { userId: 1, firstName: "harstit", gender: "male" },
//   { userId: 2, firstName: "Adarsh", gender: "male" },
//   { userId: 3, firstName: "Max", gender: "male" },
// ];

// for(let user of users){
//     console.log(user.firstName)
// }

//-----------------------------------------------------

// important array methods
// Foreach method
// const numbers = [4,2,5,8];

// function myfunc(number,index){
//    console.log(`index is ${index} number is ${number}`)
// }
// numbers.forEach(myfunc)

// numbers.forEach(function(number,index){
//   console.log(`index is ${index} number is ${number}`)
// })

// numbers.forEach(function(number){
//   console.log(number*2)
// })

// const users =[
//   {firstName:"harshit",age:23},
//   {firstName:"mohit",age:21},
//   {firstName:"nitish",age:22},
//   {firstName:"garima",age:20},
// ]
// user.forEach((user)=>{
//   console.log(user.firstName)
// })
//Anonymous function
// users.forEach(function(user){
//   console.log(user.firstName)
// })

//----------------------------------------------------
//map method

// const numbers = [3,4,6,1,8];
// const square = function(number){
//   return number*number;
// }
// we can use arrow  function also
// const squareNumber = numbers.map(function(number){
//   return number*number
// })
// console.log(squareNumber)

// const users =[
//      {firstName:"harshit",age:23},
//      {firstName:"mohit",age:21},
//      {firstName:"nitish",age:22},
//      {firstName:"garima",age:20},
//    ]

// const userNames = users.map((user)=>{
//   return user.firstName;
// })
// console.log(userNames);

//------------------------------------------------------------

// filter method

// const numbers = [1, 2, 3, 4, 5, 6];
// const isOdd = function(number){
//   return number%2!==0;
// }

// const oddNumbers = numbers.filter(function (number) {
//   return number % 2 !== 0;
// });
// console.log(oddNumbers);

//----------------------------------------------------------
//reduce

// const numbers = [1,2,3,4,5,10];

// const sum = numbers.reduce((accumulator,currentValue)=>{
//   return accumulator + currentValue;
// },0);
// console.log(sum)

// const userCart = [
//   { productId: 1, productName: "mobile", price: 12000 },
//   { productId: 2, productName: "mobile", price: 14000 },
//   { productId: 3, productName: "mobile", price: 20000 },
// ];
// const totalAmount = userCart.reduce((totaPrice, currentValue) => {
//   return totaPrice + currentValue.price;
// }, 0);
// console.log(totalAmount);

//-----------------------------------------------------
//Set----------------------------------------------

// Set (it is iterable)
// store Data
// sets also have its own methods
// No index-based access
// Order is not guranteed
// unique items only (no duplicates allowed)

// const items = ["item1",'item2','item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items)
// if(numbers.has(1)){
//     console.log('present')
// }else{
//     console.log('not present')
// }
// console.log(numbers)
// for(let number of numbers){
//     console.log(number)
// }

// const myArray = [1,2,3,4,4,5,6,5,6];
// const uniqueElement = new Set(myArray);
// let length = 0;
// for(let element of uniqueElement){
//     length++;
// }
// console.log(length)

//--------------------------------------------------------
//----------------------Maps---------------

// map is iterable
// store data in ordered fashion
// store key vlaue pair (like object)
// duplicate keys are not allowed like objects

// difference between map and objects

// objects can only have string or symbol as key

// in maps you can use anything as key
// like array,number,string

// const person = new Map();
// person.set("firstName", "Adarsh");
// person.set("age", 9);
// person.set(1, "one");
// person.set([1, 2, 3], "one");
// person.set({ 1: "one" }, "one");
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key,person.get(key))
// }

// for(let [key,value] of person){
//     console.log(key,value)
// }


