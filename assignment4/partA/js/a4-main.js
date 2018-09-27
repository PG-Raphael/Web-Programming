// /********************************************************************************* 
// * 
// * WEB222 – Assignment #4b 
// * 
// * I declare that this assignment is my own work in accordance with Seneca 
// * Academic Policy. No part of this assignment has been copied manually or 
// * electronically from any other source (including web sites) or distributed to 
// * other students. 
// * 
// * Name: Seungmin Yun Student ID: 010820132 Date: 2018/07/11
// * 
// ********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;

function loadTableWithFilters(){
    var tbody = document.querySelector('#main-table-body');
    tbody.innerHTML = "";
    for(var i = 0; i < petData.length; i++) {
        document.querySelector("#main-table-body");
        if ((filterType == "" || filterType == petData[i].type) 
        && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) {
            var row = document.createElement("tr");
            var td = document.createElement("td");
            var img = document.createElement("img");

            img.setAttribute("src", petData[i].image.src);
            img.setAttribute("alt", petData[i].image.alt);
            img.setAttribute("width", petData[i].image.width);
            img.setAttribute("height", petData[i].image.height);

            td.appendChild(img);
            row.appendChild(td);
            
            var td2 = document.createElement("td");
            var header = document.createElement("h4");
            var underline = document.createElement("u");
            var name = document.createTextNode(petData[i].name);
            underline.appendChild(name);
            header.appendChild(underline);
            td2.appendChild(header);
            
            var paragraph = document.createElement("p");
            paragraph.innerHTML = petData[i].description.toString();

            td2.appendChild(paragraph);
            
            var span = document.createElement("span");
            var petage = document.createTextNode('Age: '+petData[i].age+ 'years old');
            span.appendChild(petage);
            td2.appendChild(span);
            row.appendChild(td2);
            document.querySelector("#main-table-body").appendChild(row);
        }
    }
};

function filterDog(){
    filterType = "dog";
    loadTableWithFilters(petData);
}
function filterCat(){
    filterType = "cat";
    loadTableWithFilters(petData);
}
function filterBird(){
    filterType = "bird";
    loadTableWithFilters(petData);
}
function filter_zero_1(){
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters(petData);
}
function filter_1_3(){
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters(petData);
}
function filter_4_plus(){
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters(petData);
}
function filterAllPets(){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters(petData);
}
