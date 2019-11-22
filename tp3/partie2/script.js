const france = ["Paris", "Grenoble", "Lyon", "Marseille"];
const allemagne = ["Francfort", "Berlin", "Munich", "Dusseldorf"];
const angleterre = ["Londres", "Manchester", "Birmingham", "Oxford"];
const espagne = ["Barcelone", "Madrid", "Seville", "Bilbao"];

let paysChoisi;
let villeChoisie


///////////////////////JQUERY///////////////////////////
/*
function handleForm() {
    let ville = $('#selectCity').val();
    if (france.includes(ville)) {
        alertWelcome("France");
        changeEventAndForm();
        displayOtherCity(france, ville);
    } else if (allemagne.includes(ville)) {
        alertWelcome("Allemagne");
        changeEventAndForm();
        displayOtherCity(allemagne, ville);
    } else if (angleterre.includes(ville)) {
        alertWelcome("Angleterre");
        changeEventAndForm();
        displayOtherCity(angleterre, ville);
    } else if (espagne.includes(ville)) {
        alertWelcome("Espagne");
        changeEventAndForm();
        displayOtherCity(espagne, ville);
    } else {
        event.preventDefault();
    }
}

function alertWelcome(pays) {
    alert(`Bienvenue en ${pays}`)
}

function changeEventAndForm() {
    $('#formCity').hide().off("submit",handleForm).on("submit",addNewCity);
    $('#displayForm').show().text('Ajouter une destination');
}

function displayOtherCity(pays = null, ville = null) {
    if(ville !== null) {
        villeChoisie = ville;
    }
    if(pays !== null) {
        paysChoisi = pays;
    }
    $('#cityList').html('');
    paysChoisi.forEach(ville => {
        if (ville !== villeChoisie) {
            $('#cityList').append(`<li>${ville}</li>`);
        }
    })
}

function addNewCity() {
    paysChoisi.push($('#selectCity').val());
    displayOtherCity()
}

function displayFormAndHideButton() {
    $('#displayForm').hide();
    $('#formCity').show();
}

$(document).ready(function() {
    $('#displayForm').click(displayFormAndHideButton);
    $('#formCity').on("submit",handleForm);
});

*/

///////////////////////////JS/////////////////////////

function handleForm() {
    let ville = document.getElementById("selectCity").value;
    if (france.includes(ville)) {
        alertWelcome("France");
        changeEventAndForm();
        displayOtherCity(france, ville);
    } else if (allemagne.includes(ville)) {
        alertWelcome("Allemagne");
        changeEventAndForm();
        displayOtherCity(allemagne, ville);
    } else if (angleterre.includes(ville)) {
        alertWelcome("Angleterre");
        changeEventAndForm();
        displayOtherCity(angleterre, ville);
    } else if (espagne.includes(ville)) {
        alertWelcome("Espagne");
        changeEventAndForm();
        displayOtherCity(espagne, ville);
    } else {
        event.preventDefault();
    }
}

function alertWelcome(pays) {
    alert(`Bienvenue en ${pays}`)
}

function changeEventAndForm() {
    let formCity = document.getElementById("formCity");
    formCity.removeEventListener("submit",handleForm);
    formCity.addEventListener("submit", addNewCity);
    formCity.hidden = true;

    let displayForm = document.getElementById("displayForm");
    displayForm.hidden = false;
    displayForm.innerText = 'Ajouter une destination';
}

function displayOtherCity(pays = null, ville = null) {
    if(ville !== null) {
        villeChoisie = ville;
    }
    if(pays !== null) {
        paysChoisi = pays;
    }
    document.getElementById("cityList").innerHTML = "";
    paysChoisi.forEach(ville => {
        if (ville !== villeChoisie) {
            document.getElementById("cityList").innerHTML += `<li>${ville}</li>`;
        }
    })
}

function addNewCity() {
    paysChoisi.push(document.getElementById("selectCity").value);
    displayOtherCity();
}

function displayFormAndHideButton() {
    document.getElementById("displayForm").hidden = true;
    document.getElementById("formCity").hidden = false;
}

window.addEventListener("load", function () {
   document.getElementById("displayForm").addEventListener("click", displayFormAndHideButton);
   document.getElementById("formCity").addEventListener("submit", handleForm);
});
