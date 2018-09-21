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


// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.getMonth()+"/"+this.dob.getDate()+"/"+this.dob.getFullYear() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
var del = courses.pop();
courses.push({
  code: 'IBC233',
  name: 'iSERIES Business Computing',
  hours: 4,
  url: 'https://scs.senecac.on.ca/~ibc233/'
}, {
  code: 'OOP244',
  name: 'Introduction to Object Oriented Programming',
  hours: 4,
  url: 'https://scs.senecac.on.ca/~oop244/'
}, {
  code: 'WEB222',
  name: 'Internet I - Internet Fudamentals',
  hours: 4,
  url: 'https://scs.senecac.on.ca/~web222/'
}, {
  code: 'DBS201',
  name: 'Introduction to Database Design and SQL',
  hours: 4,
  url: 'https://scs.senecac.on.ca/~dbs201/'
});
console.log('*** Task 1 ***\n\n');
console.log('Course EAC150 was deleted from the array (courses)\n');
console.log('Adding new course objects into the array (courses)\n\n');
console.log('Course objects in the array (courses):\n');
for (var i = 0; i < courses.length; i++) {
  console.log('"'+courses[i].code+", "+courses[i].name+", "+courses[i].hours+" hours/week, website: "+courses[i].url+'"');
};

// task 2
var student1 = Object.create(student);
var student2 = Object.create(student);
var student3 = Object.create(student);
var student4 = Object.create(student);

student1.name = "John Smith";
student1.dob = new Date(1999,9,10);
student1.sid = "010456101";
student1.program = "CPA";
student1.gpa = 4.0;

student2.name = "Jim Carrey";
student2.dob = new Date(1992,1,17);
student2.sid = "012345678";
student2.program = "CPD";
student2.gpa = 3.5;

student3.name = "Justin Bieber";
student3.dob = new Date(1994,3,1);
student3.sid = "0987654321";
student3.program = "CAN";
student3.gpa = 3;

student4.name = "Justin Trudea";
student4.dob = new Date(1992,1,12);
student4.sid = "123456789";
student4.program = "CAN";
student4.gpa = 4;
var students = [student1, student2];

students.push(student3);

students.push(student4);
function showStudents(item, index) {   

   console.log(index + ": " + item.toString());

}
console.log("\n\n*** Task 2 ***\n\nStudent objects in the array (students):")

students.forEach(showStudents);
