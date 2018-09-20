/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Seungmin Yun Student ID: 010820132 Date: 2018-05-21
*
********************************************************************************/

/*****************************
* Task 1
*****************************/
var student = "Seungmin";
var numberOfCourses = 6;
var program = 'CPA';
var job = true;
console.log('My name is ' +student, "and i'm in " +program, "I'm taking " +numberOfCourses, "courses in this semester.") ;

if(job == true){
    job = 'have';
}
else{
    job = "don't have";
}
console.log('My name is ' +student, "and i'm in " +program, "I'm taking " +numberOfCourses, "courses in this semester and I " +job, "a part-time job now.");


/*****************************
* Task 2
*****************************/
var year = 2018;
var age = prompt("Please enter your age:");
console.log("You were born in the year of " +(year - age));
var studyingPeriod = prompt("Enter the number of years you expect to study in the college:");
console.log("You will graduate from Seneca college in the year of "+(+ year + +studyingPeriod));
/*****************************
* Task 3
*****************************/
var celcius = 20;
console.log(+celcius + "°C is " + (celcius * 9 / 5 + 32) +  "°F" );

var fahrenheit = 80;
console.log(+fahrenheit + "F is " + ((fahrenheit -32) * 5/9) + "C.");

/*****************************
* Task 4
*****************************/
for (var i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i + ' is even')
    }
    else if (i % 2 != 0) {
        console.log(i + ' is odd')
    }
} 
/*****************************
* Task 5
*****************************/
function largerNum(a, b) {
    if (a > b){
        return a;
    } else {
      return b;
    }
}
var greaterNum  = function(a, b) {
    if (a > b){
        return a;
    } else {
      return b;
    }
} 
console.log('The larger number of 5 and 12 is ' + largerNum(5,12))
console.log('The larger number of 12 and 5 is ' + largerNum(12,5))
console.log('The greater number of 5 and 12 is ' + greaterNum(5,12))
console.log('The greater number of 12 and 5 is ' + greaterNum(12,5))

/*****************************
* Task 6
*****************************/
function Evaluator(){
    var sum = 0;
    for(var i=0; i< arguments.length; i++){
        sum += arguments[i];
    }
    return sum / arguments.length >= 50 ? true : false;    
}

console.log("Average grater than or equal to 50 (40, 50, 60): " + Evaluator(40, 50, 60));
console.log("Average grater than or equal to 50 (10, 20, 30): " + Evaluator(10, 20, 30));
console.log("Average grater than or equal to 50 (70, 80, 90): " + Evaluator(70, 80, 90));
/*****************************
* Task 7
*****************************/
var Grader = function(score){
    if(score >=90 && score <= 100)
    return 'A+';
    else if(score >=80 && score <= 89)
    return 'A';
    else if(score >=75 && score <= 79)
    return 'B+';
    else if(score >=70 && score <= 74)
    return 'B';
    else if(score >=65 && score <= 69)
    return 'C+';
    else if(score >=60 && score <= 64)
    return 'C';
    else if(score >=55 && score <= 59)
    return 'D+';
    else if(score >=50 && score <= 54)
    return 'D';
    else if(score >=0 && score <= 49)
    return 'F (Not a Pass)';
    else
    return 'Wrong Value';
  }
console.log("Score (35) : "+ Grader(35) );
console.log("Score (97) : "+ Grader(97) );
console.log("Score (68) : "+ Grader(68) );



/*****************************
* Task 8
*****************************/

var showMultiples = function (num,numMultiples){
    for (var i = 1; i <= numMultiples; i++){
        console.log(num + " x " + i + " = " + num * i);
    } 
}
  showMultiples(5,4);
    showMultiples(7,3);
    showMultiples(9,2);
