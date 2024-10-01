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

//------------------------------------------------------------
// Optional chaining
// this ? say you have value it proceed futher if no it will return undifine

// const user = {
//   firstName: "Adarsh",
//   address: { houseNumber: "12345" },
// };

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

//-------------------------------------------------
// methods
// function inside object
// this mean object which itself

// const person ={
//     firstName : "Adarsh",
//     age: 18,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// person.about()

// function personInfo() {
//   console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 ={
//     firstName:'Adarsh',
//     age:48,
//     about:personInfo
// }
// const person2 ={
//     firstName:'harshit',
//     age:28,
//     about:personInfo
// }
// const person3 ={
//     firstName:'Mohit',
//     age:18,
//     about:personInfo
// }

// person1.about()
// person2.about()
// person3.about()

//--------------------------------------------------------------
// this is window object
// console.log(this)
// console.log(window)

//-------------------------------------------------------------

//------------------Call--------------------------
// const about = function (hobby,code) {
//   console.log(this.firstName, this.age,hobby,code);
// };
// const user1 = {
//   firstName: "Adarsh",
//   age: 18,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };
// const user2 = {
//   firstName: "harshit",
//   age: 28,
// };

// user1.about.call(user2);
//-----------------------------about
// about.call(user1,"game","great")
// apply
// about.apply(user1,["game","nice"])
//---------------------------------bind
// const func = about.bind(user2,"guitar","bach")
// func()

//-----------------------------------------------------------

// compilation
// code execution
//why compilation
//how javascript code executes
// what is global exection context
// what is local exection context

//-----------------------------------------------------
// closures ----------------------------------
// function can return function

// function outerFunction(){
//     function innerFunction(){
//         console.log('hello world')
//     }
//     return innerFunction
// }

// const ans = outerFunction();
// ans()

//---------------------------------------------------
//DOM
// console.dir(document);

// -------------select element using get element by id-------------------

// const mainHeading = (document.getElementById("main-heading"))
// console.log(mainHeading)

// ------------select element using query selector -------------------

//  const mainHeading = (document.querySelector("#main-heading"))
//  const header = (document.querySelector(".header"))
// //  const navItem = (document.querySelector(".nav-item"))
//  const navItem = (document.querySelectorAll(".nav-item"))
//  console.log(navItem)

//--------------------change text-------------------
// textContent and innerText
// const mainHeading = document.getElementById('main-heading')
// console.log(mainHeading.textContent)
// console.log(mainHeading.innerText)
// mainHeading.textContent = "this is somthing else."
// console.log(mainHeading.textContent)

// -------------------------change the style of elements--------

// const mainHeading = document.querySelector('div.headline h2')
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "20px solid green";

//----------------------------- get and set attrubutes------

// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));

// link.setAttribute("href","https://google.com");
// console.log(link.getAttribute("href"))

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute('type'))

//--------get multiple element using getElements by class name---
//-----------get multiple element ites using querySelectorAll----

// const navItem = document.getElementsByClassName("nav-item") // HTMLCollection
// console.log(navItem)
// const navItem = document.querySelectorAll(".nav-item")//Node list
// console.log(navItem[0])

//----------------loop-----------
// Simple loop
// for of loop
// forEach
// HTML Collection-----
// const navItems = document.getElementsByTagName("a");

// for(let i=0;i<navItems.length;i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "black";
//     navItem.style.color="red";
//     navItem.style.fontWeight="bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "black";
//     navItem.style.color="red";
//     navItem.style.fontWeight="bold";
// }
// ------same but one thing nodelist can work rhis foreach methon not with HTML collections---------

// const navItems = document.querySelectorAll("a");

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "black";
//         navItem.style.color = "red";
//         navItem.style.fontWeight = "bold";
// })
// ------------------------------------innerHTML---------

// const headline = document.querySelector(".headline");
// console.log(headline);
// headline.innerHTML = "<h1>Inner html changed </h1>";  // First change
// headline.innerHTML += "<button class = \"btn\">Learn more</button>";  // Add the button without overwriting

//--------------------------------traverse dom tree-----

// const rootNode = document.getRootNode();
// console.log(rootNode.childNodes);

// const rootNode = document.getRootNode();

//Child
// const htmlElementNode = rootNode.childNodes[6];
// console.log(htmlElementNode.childNodes)
// NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode)

//Parent
// console.log(headElementNode.parentNode)
//Sibling relation

// console.log(headElementNode.nextSibling)
//get next element ignore text

// console.log(headElementNode.nextElementSibling)
// console.log(headElementNode.childNodes)

//------example--------

// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

//-------------------example---------

// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"

//------------example -----------

// const head = document.querySelector("head");
// const title = head.querySelector("title")
// console.log(title.childNodes)

// -------------example------------
// const container = document.querySelector(".container");
// console.log(container.childNodes)
//childNodes ignore text but it give HTML collection
// console.log(container.children);

//-------------class in DOM----------

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList)
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove('container')
// const ans = sectionTodo.classList.contains('container')
// console.log(ans)
// sectionTodo.classList.toggle('bg-dark')

// const header = document.querySelector(".header");
// console.log(header.classList)
// header.classList.add('bg-dark')

// ----------------------innerHTML to add html element------

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML ="<li>New Todo</>"
// todoList.innerHTML += "<li>New Todo</>";
// todoList.innerHTML += "<li>Teach students</>";

// -------------------document.createElement()---------------

// append
// prepend
// remove
// before
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent ="teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)

// const todo1 = document.querySelector('.todo-list');
// todo1.remove();

// const newTodoItem = document.createElement("h1");
// newTodoItem.textContent ='teach students';
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

// const newTodoItem = document.createElement("h1");
// newTodoItem.textContent ='teach students';
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);

//------------------------------height and width------

// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect().height;
// console.log(info)

// ----------------------intro to event------------------------

//click
//event add karne ke 3 tarike hai
//

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log('you click me!!')
// }

// ----------------method --- addEventListener----------------

// const btn = document.querySelector(".btn-headline");
// function clickMe() {
//   console.log("you clicked me !!!");
// }
// btn.addEventListener("click", function () {
//   console.log("you clicked me !!!");
// });

// btn.addEventListener("click", () => {
//   console.log("clicked");
// });

//-------------------------this keyword-----------------

//this keyword this in case of function is itself which is call button/element/object but in arrow function it is window object or levelup object/funtion

// const btn = document.querySelector(".btn-headline");

// btn.addEventListener('click',function(){
//     console.log('you click');
//     console.log(this);
// })
// btn.addEventListener('click',()=>{
//     console.log('you click');
//     console.log(this);
// })

//---------------------Event on button------------------------------

// const allButtons = document.querySelectorAll(".my-buttons button");

// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this);
//   });
// }

// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener("click", function () {
//     console.log(this);
//   });
// }

// allButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log(this);
//   });
// });

//------------------------------event object---------

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function (event) {
//   console.log(event);
// });

//jab bhi mai kise bhi element pe event listener add hoga
// js engine -- line by line execute karta hai
//browser -- js engine + extra features
//browser-- js engine + webApi

//jab browser kp pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
//browser----2
//1) callback function hai vo js engine ko degi
//2)callback function ke sath browser jo event hua hai uski information bhi dega ye info hamie ek onject ke from mai milegi

// const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons) {
//   button.addEventListener("click",  (e)=> {
//     console.log(e.currentTarget);
//   });
// }

// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e.currentTarget.textContent);
//   });
// });

// ------------------littel practice with click event--------------------

// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.target.style.color = "green";
//     e.target.style.backgroundColor = "yellow";
//   });
// });

//--------------------------example 2------------

// const mainButton = document.getElementById("two");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");

// function randomColorGenerator() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const randomColor = `rgb(${red},${green},${blue})`;
//   return randomColor;
// }
// mainButton.addEventListener("click", () => {
//   const randomColor = randomColorGenerator();
//   body.style.backgroundColor = randomColor;
//   currentColor.textContent = randomColor;
// });

//-------------------------Keypress event--------------
//---------------------------mouseover event----------

// const body = document.body;

// body.addEventListener('keypress',(e)=>{
//   console.log(e.key)
// });

// const mainButton = document.querySelector('.btn-headline');

// mainButton.addEventListener("mouseover",()=>{
//   console.log("mouseover event")
// })

//

//--------------------------------------------------------------------

//event bubbling/event propogation
//event capturing
//event delegation
//-------------------first capture than bubbling

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

//--------------------------event capturing
// child.addEventListener(
//   "click",
//   () => {
//     console.log("you capture on child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("you capture on parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("you capture on grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("you capture on body");
//   },
//   true
// );
//------------------------------event bubbling
// child.addEventListener("click", () => {
//   console.log("you clicked on child");
// });
// parent.addEventListener("click", () => {
//   console.log("you clicked on parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("you clicked on grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("you clicked on body");
// });

//-------------------------event delegation

// grandparent.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });

//------------------sychronous programming and asyncheonous programming
//--------------------------sychronous programming
//sychronous programming single threaded

//---------------setTimeout------------------------

// console.log("script start");

// setTimeout(()=>{
//   console.log("inside settimeout");
// },1000);

// for(let i=1;i<100;i++){
//   console.log("...")
// }

// console.log("Script end")

//---------------setinterval------------------------

// console.log("script startr");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);

// console.log("script end");

// const body = document.body;
// const button = document.getElementById("setb");

// const intervalId = setInterval(()=>{
//   const red = Math.floor(Math.random()*256);
//   const green = Math.floor(Math.random()*256);
//   const blue = Math.floor(Math.random()*256);
//   const rgb = `rgb(${red},${green},${blue})`;
//   body.style.background = rgb
// },1000)

// button.addEventListener("click",()=>{
//   clearInterval(intervalId);
//   button.textContent = body.style.background
// })
// console.log(intervalId)

//--------------------understand callback------

// function myFunc(callback){
//   console.log("Function is doing task 1")
//   callback()
// }

// myFunc(()=>{
//   console.log("function is doing task 2")
// })

// function getTwoNumberAndAdd(number1, number2, callback) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     callback(number1, number2);
//   } else {
//     console.log("wrong Date Type");
//   }
// }

// getTwoNumberAndAdd(4, 4, (num1,num2) => {
//   console.log(num1 + num2);
// });

//-----callbacks ,callback hell ,pyramid of doom---------
//------------asynchronous programming-----------

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// // callback hell
// setTimeout(() => {
//   heading1.textContent = "heading1";
//   heading1.style.color = "yellow";
//   setTimeout(() => {
//     heading2.textContent = "heading2";
//     heading2.style.color = "red";
//     setTimeout(() => {
//       heading3.textContent = "heading3";
//       heading3.style.color = "green";
//       setTimeout(() => {
//         heading4.textContent = "heading4";
//         heading4.style.color = "blue";
//         setTimeout(() => {
//           heading5.textContent = "heading5";
//           heading5.style.color = "violet";
//           setTimeout(() => {
//             heading6.textContent = "heading6";
//             heading6.style.color = "purple";
//             setTimeout(() => {
//               heading7.textContent = "heading7";
//               heading7.style.color = "pink";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//-------------------