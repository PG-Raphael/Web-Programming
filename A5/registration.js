// * Name: Seungmin Yun Student ID: 010820132 Date: 2018/07/30
function validate(form){
var sideMsg = document.querySelector('.side1');

var p = document.createElement('p');
var myinput = document.getElementById('txtPW');
var myinput2 = document.getElementById('txtPWre');
sideMsg.innerHTML = '';

     if (myinput.value != myinput2.value) {
      p.appendChild(document.createTextNode('Passwords do not match.'));
      
     }
     
     // regular expression to match required string format
     
  re = /^\w+$/;
      
  //compare both password field value 
  if(myinput.value != "" && myinput.value == myinput2.value) {
        if(myinput.length < 8) {
          p.appendChild(document.createTextNode("Error: Password must be 8 characters long"));
        
      }
    if(myinput.value[0] != /[a-zA-Z]/){
      p.appendChild(document.createTextNode("Error: Password must start with alphabet"));
         
    }
        // regular expression to match required at least one numeric value in passord field
      re = /[0-9]/;
      if(!re.test(myinput.value)) {
        p.appendChild(document.createTextNode("Error: password must contain at least one number (0-9)!"));
      
      }
        // regular expression to match required at least one lowercase letter in passord field
      re = /[a-z]/;
      if(!re.test(myinput.value)) {
        p.appendChild(document.createTextNode("Error: password must contain at least one lowercase letter (a-z)!"));
        
      }
        // regular expression to match required at least one uppercase letter in passord field
      re = /[A-Z]/;
      if(!re.test(myinput.value)) {
        p.appendChild(document.createTextNode("Error: password must contain at least one uppercase letter (A-Z)!"));
         
      }
   else {
    p.appendChild(document.createTextNode("Error: Please check that you've entered and confirmed your password!"));
     
  }
     sideMsg.appendChild(p);  
  }
}
//onchange function if there is an error, msg will show in the aside section.
function errMsg(frm) {
var sideMsg = document.querySelector('.side1');
var p = document.getElementById('errmsg');
p.innerHTML = '';
var p2 = document.createElement('span');
var check = frm.name;

// sideMsg.innerHTML = '';
  
if (!frm.checkValidity() || frm.value.trim().length == 0) {
 
  if (frm.value.trim().length == 0 && check != 'PW') {
    p2.appendChild(document.createTextNode('This field is required.'));
  }
  else if (check == 'FirstName' || check == 'LastName' || check == 'StName' || check == 'city') {
    p2.appendChild(document.createTextNode('This field is only alphabet'));
  }
  else if(check == 'userID') {
    p2.appendChild(document.createTextNode('First letter must be alphabet and 6 letters long'));
  } 
  else if (check == 'Unit' || check == 'StNo') {
    p2.appendChild(document.createTextNode('This field is only numbers'))
  } 
  else if (check == 'PC') {
    p2.appendChild(document.createTextNode('L#L#L# format only (In Canada Only)'));
  } 
  else if (check == 'Phone') {
    p2.appendChild(document.createTextNode('###-###-#### format only'));
  } 
  else if (check == 'Email') {
    p2.appendChild(document.createTextNode('letter@letter.domain (EX ID@gmail.com'));
  }
  p.appendChild(p2);
  sideMsg.appendChild(p);
 }
}







