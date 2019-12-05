const destinations = [
    {country: "France", circuit: "Paris/Grenoble", image: "image/grenoble.jpg", price: 3000},
    {country: "Brésil", circuit: "Rio/Brasilia", image: "image/rio.jpg", price: 10},
    {country: "Australie", circuit: "Camberra/Sydney", image: "image/sydney.jpg", price: 1000},
    {country: "Japon", circuit: "Coupe du monde", image: "image/japon.jpg", price: 40000}
];

const tableTr = `
<tr>
    <th>Pays</th>
    <th>Circuit</th>
    <th>Image</th>
    <th>Prix</th>
    <th>Réservation</th>
</tr>
`;

const form = `
<form>
    <div>
        <label for="country">Pays</label>
        <input type="text" id="country">
    </div>
    <div>
        <label for="country">Pays</label>
        <input type="text" id="country">
    </div>
    <div>
        <label for="country">Pays</label>
        <input type="text" id="country">
    </div>
    <div>
        <label for="country">Pays</label>
        <input type="text" id="country">
    </div>
</form>
`;

function displayDestinations() {
    let tableContent = document.getElementById("destination-tables").innerHTML = tableTr;
    destinations.forEach((element, index) => {
        document.getElementById("destination-tables").innerHTML +=
            `<tr>
                <td>${element.country}</td>
                <td>${element.circuit}</td>
                <td><img src="${element.image}" alt=""></td>
                <td>${element.price}€</td>
                <td>
                    <button>Réserver</button>
                    <button class="remove-button" value="${index}">Supprimer</button>
                    <button class="modify-button" value="${index}">Modifier</button>
                </td>
            </tr>`
    });
}

function createDestination(destination) {
    destinations.push(destination);
    displayDestinations();
}

function modifyDestination(destination, index) {
    destinations[index] = destination;
    displayDestinations();
}

function removeDestination(event) {
    index = event.toElement.value;
    destinations.splice(index, 1);
    displayDestinations();
    addEvent("remove-button", removeDestination);
}

function addEvent(elementClass, action) {
    let button = document.getElementsByClassName(elementClass);
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", action)
    }
}

function displayFormToModify() {

}

window.addEventListener("load", function () {
    displayDestinations();
    addEvent("remove-button", removeDestination);
    addEvent("modify-button", modifyEvent);
});