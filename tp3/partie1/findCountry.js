const france = ["Paris", "Grenoble", "Lyon", "Marseille"];
const allemagne = ["Francfort", "Berlin", "Munich", "Dusseldorf"];
const angleterre = ["Londres", "Manchester", "Birmingham", "Oxford"];
const espagne = ["Barcelone", "Madrid", "Seville", "Bilbao"];

function verifyCountry() {
    let ville = document.getElementById("ville").value;
    if (france.includes(ville)) {
        alertWelcome("France");
    } else if (allemagne.includes(ville)) {
        alertWelcome("Allemagne");
    } else if (angleterre.includes(ville)) {
        alertWelcome("Angleterre");
    } else if (espagne.includes(ville)) {
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
