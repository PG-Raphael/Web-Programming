// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];
window.onload = function() {
    var tableElement = document.querySelector("#table1");
    var table1 = '<table border = "2">' +
                '<caption>Table of users</caption>' +
                '<tr>' +
                '<th>First Name</th>' +
                '<th>Last Name</th>' +
                '<th>Age</th>' +
                '<th>Email</th>' +
                '</tr>';

    for (var i = 0; i < users.length; i++) {
        table1 += '<tr>' +
                '<td>' + users[i].first_name + '</td>' +
                '<td>' + users[i].last_name + '</td>' +
                '<td>' + users[i].age + '</td>' +
                '<td>' + '<a href="mailto:' + users[i].email + '" target="_top">' + users[i].email + '</td>' +
                '</tr>';
    }
    table1 += "</table>";
    tableElement.innerHTML = table1;
}