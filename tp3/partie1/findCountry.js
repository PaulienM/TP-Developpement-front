const france = ["Paris", "Grenoble", "Lyon", "Marseille"];
const allemagne = ["Francfort", "Berlin", "Munich", "Dusseldorf"];
const angleterre = ["Londres", "Manchester", "Birmingham", "Oxford"];
const espagne = ["Barcelone", "Madrid", "Seville", "Bilbao"];

function verifyCountry() {
    let ville = document.getElementById("ville").value;
    if (france.indexOf(ville) !== -1) {
        alertWelcome("France");
    } else if (allemagne.indexOf(ville) !== -1) {
        alertWelcome("Allemagne");
    } else if (angleterre.indexOf(ville) !== -1) {
        alertWelcome("Angleterre");
    } else if (espagne.indexOf(ville) !== -1) {
        alertWelcome("Espagne");
    } else {
        event.preventDefault();
    }
}

function alertWelcome(pays) {
    alert(`Bienvenue en ${pays}`)
}

window.addEventListener("load", function () {
    document.getElementById("form").addEventListener("submit", verifyCountry);
});
