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
<div>
    <label for="input-country">Pays</label>
    <input type="text" id="input-country">
</div>
<div>
    <label for="input-circuit">Circuit</label>
    <input type="text" id="input-circuit">
</div>
<div>
    <label for="input-image">Image</label>
    <input type="text" id="input-image">
</div>
<div>
    <label for="input-price">Prix</label>
    <input type="number" id="input-price">
</div>
<div>
    <button id="submit-destination">Valider</button>
</div>
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

function getDestinationFormFrom() {
    return {
        country: document.getElementById("input-country").value,
        circuit: document.getElementById("input-circuit").value,
        image:  document.getElementById("input-image").value,
        price: document.getElementById("input-price").value,
    };
}

function loadEvents() {
    addEvent("remove-button", removeDestination);
    addEvent("modify-button", displayFormToModify);
    document.getElementById("add-destination").addEventListener("click", displayFormToCreate);
}

function createDestination() {
    let destination = getDestinationFormFrom();
    destinations.push(destination);
    displayDestinations();
    loadEvents();
}

function modifyDestination(event) {
    let index = event.toElement.value;
    let destination = getDestinationFormFrom();
    destinations[index] = destination;
    displayDestinations();
    loadEvents();
}

function removeDestination(event) {
    let index = event.toElement.value;
    destinations.splice(index, 1);
    displayDestinations();
    loadEvents();
}

function addEvent(elementClass, action) {
    let button = document.getElementsByClassName(elementClass);
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", action)
    }
}

function displayFormToCreate(event) {
    let index = event.toElement.value;
    document.getElementById("form-destination").innerHTML = `
    <h3>Créer une destination</h3>
    ${form}
    `;
    document.getElementById("submit-destination").addEventListener("click", createDestination);
}

function displayFormToModify(event) {
    let index = event.toElement.value;
    let destination = destinations[index];
    document.getElementById("form-destination").innerHTML = `
    <h3>Modifier la destination</h3>
    ${form}
    `;
    document.getElementById("input-country").value = destination.country;
    document.getElementById("input-circuit").value = destination.circuit;
    document.getElementById("input-image").value = destination.image;
    document.getElementById("input-price").value = destination.price;
    document.getElementById("submit-destination").value = index;
    document.getElementById("submit-destination").addEventListener("click", modifyDestination);
}

window.addEventListener("load", function () {
    displayDestinations();
    loadEvents();
});