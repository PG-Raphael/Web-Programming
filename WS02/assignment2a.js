/*******************************************************************************
 *                     WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy.  No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students.
 * 
 * Name: Seungmin Yun Student ID: 010820132 Date: 2018,06,07
 *
 ******************************************************************************/
/*****************************
 * Step 1 
 *****************************/
var e1 = 0, e2 = 0, e3 = 0, e4 = 0, e5 = 0, e6 = 0, e7 = 0, str = "";
/*****************************
 * Step 2 
 *****************************/ 
function capFirstLetter(str){
var firstletter = str.charAt(0);
firstletter = firstletter.toUpperCase();
var restletters = str.substr(1);
restletters = restletters.toLowerCase();
return firstletter + restletters;
}
e1 =  prompt("Enter first name: ");
var name = capFirstLetter(e1);
/*****************************
 * Step 3 
 *****************************/

var age = function getAge(num){
   var thisyear = (new Date()).getFullYear();
   var newage = e2;
   return thisyear - newage;
}
e2 = prompt("Enter the year of your birth: ");
/*****************************
 * Step 4 
 *****************************/
e3 = prompt("Enter the college name: ");
var tmp =  e3.split(/ /);
var capfirst = capFirstLetter(tmp[0]);
var capsecond = capFirstLetter(tmp[1]);
/*****************************
 * Step 5 
 *****************************/
e4 = prompt("Enter 5 favorite sports", "hockey,football,basketball,tennis,golf ");
e4 = e4.replace(/football/gi, "soccer");
var tmp1 = e4.split(/,/);
var tmparray = tmp1; 
e5 = prompt("Enter an extra favorite sport", "fomula 1");
tmparray.push(e5);


/*****************************
 * Step 6 
 *****************************/

tmparray.sort();
function capletter(strarray){
    var newarray = [];
    for (var i = 0; i < strarray.length; i++){
        var newstr = strarray[i].toUpperCase();
        newarray.push(newstr);
    }
return newarray;
}
var sportCap = capletter(tmparray);
/*****************************
 * Step 7 
 *****************************/
function getDateString(date){

var yyyy = e6.getFullYear().toString();
var mm = (e6.getMonth()+1).toString();
var dd  = e6.getDate().toString();

var mmarray = mm.split('');
var ddarray = dd.split('');
return yyyy + '-' + (mmarray[1] ? mm : "0" + mmarray[0]) + '-' + (ddarray[1] ? dd : "0" + ddarray[0]);
}
e6 = new Date();
e7 = getDateString(e6)
/*****************************
 * Step 8 
 *****************************/
var display = str.concat("User info:\n\n", "name (e1): ", name,"\n", "age (e2): ", age(),"\n", 
"school (e3): ", capfirst + " " + capsecond, "\n", "favorite sports (e4):\n\t",sportCap[0],"\n\t",sportCap[1],"\n\t",sportCap[2],"\n\t",
sportCap[3],"\n\t",sportCap[4],"\n\t",sportCap[5],"\n","current date (e7): ", e7);

console.log(display);
