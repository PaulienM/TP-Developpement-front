let randomNumber = Math.floor((Math.random() * 11));

console.log(randomNumber);

const hardMode = 1;

let userNumber;

let nbTry = 1;

function openDialog() {
    userNumber = parseInt(prompt("Essayez de deviner un chiffre entre 1 et 10"));
    verifyResult();
}

function openRetryDialog() {
    if (userNumber > randomNumber ? message = "petit" : message = "grand")
    userNumber = parseInt(prompt(`C'est plus ${message}, réessayez !`));
    verifyResult();
}

function verifyResult() {
    if (randomNumber === userNumber) {
        winAlert();
    } else {
        nbTry++;
        if (hardMode === 1 && nbTry === 4) {
            loseAlert();
        } else {
            openRetryDialog();
        }
    }
}

function winAlert() {
    if (nbTry === 1) {
        alert("Felicitation, tu as trouvé du premier coup");
    } else {
        alert(`Bravo, tu as gagné en ${nbTry} coups`);
    }
}

function loseAlert() {
    alert("Désolé mais tu as perdu");
}

window.addEventListener("load", openDialog);