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
        <input type="submit">
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
    let index = event.toElement.value;
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
}

window.addEventListener("load", function () {
    displayDestinations();
    addEvent("remove-button", removeDestination);
    addEvent("modify-button", displayFormToModify);
});