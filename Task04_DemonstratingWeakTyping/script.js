/*
Demonstratios that JavaScript is a weakly typed language. 

 task a,b,c,d,e



*/

//task 4a
var myNumber = 7;
var myString = "hello world";
var myBoolean = false;

//task 4b
console.log(typeof(myNumber));  // Outputs: number
console.log(typeof(myString));  // Outputs: string
console.log(typeof(myBoolean)); // Outputs: boolean

//task 4c
var myNumericString = "15";
console.log(typeof(myNumericString));
var myNumber = 200;
var sum = myNumericString + myNumber;
console.log(sum);
console.log(typeof(sum))

//task 4d
var myNum = 5;
var myStrNum = "10";
var strNum = myNum + myStrNum;
console.log(strNum);

//task 4e
//explicitly convert the numeric value to a number using Number()
var myNum = 5;
var myStrNum = "10";
var myNonStrNum = Number(myStrNum);
var sum = myNum + myNonStrNum;
console.log(sum);