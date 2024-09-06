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
