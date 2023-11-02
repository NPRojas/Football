'use strict'

window.onload = function() {
    initTeamDropdown();
}

function initTeamDropdown() {
    //load the dropdown list 
    let teams = [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs",
        plays:"Kansas City, MO"},
    ];
   
    const teamsList = document.querySelector("#teamsList");

    let length = teams.length;

    for (let i = 0; i < length; i++) {
        // create the option element
        let theOption = document.createElement("option");
        // set the text and value of the option you created
        theOption.textContent = teams[i].name;
        theOption.value = teams[i].code;
        // append the option as a child of (inside) the
        // select element
        teamsList.appendChild(theOption);
    }
}

