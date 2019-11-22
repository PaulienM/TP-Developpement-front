const france = ["Paris", "Grenoble", "Lyon", "Marseille"];
const allemagne = ["Francfort", "Berlin", "Munich", "Dusseldorf"];
const angleterre = ["Londres", "Manchester", "Birmingham", "Oxford"];
const espagne = ["Barcelone", "Madrid", "Seville", "Bilbao"];

let paysChoisi;
let villeChoisie

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