let randomNumber = Math.floor((Math.random() * 11));

console.log(randomNumber);

const hardMode = 1; //Mettre à 1 pour perdre au bout de trois essaies. Sinon, nombre d'essais illimité

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
        document.getElementById("result").innerHTML = "Felicitation, tu as trouvé du premier coup";
    } else {
        document.getElementById("result").innerHTML = `Bravo, tu as gagné en ${nbTry} coups`;
    }
}

function loseAlert() {
    document.getElementById("result").innerHTML = "Désolé mais tu as perdu";
}

window.addEventListener("load", openDialog);