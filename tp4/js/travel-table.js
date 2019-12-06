const destinations = [
    {country: "France", circuit: "Paris/Grenoble", image: "image/grenoble.jpg", price: 3000},
    {country: "Brésil", circuit: "Rio/Brasilia", image: "image/rio.jpg", price: 10},
    {country: "Australie", circuit: "Camberra/Sydney", image: "image/sydney.jpg", price: 1000},
    {country: "Japon", circuit: "Coupe du monde", image: "image/japon.jpg", price: 40000}
];


const form = `
<form>
  <div class="form-row">
    <div class="col-md-5">
      <label for="input-country">Pays</label>
      <input type="text" class="form-control" id="input-country" required>
    </div>
    <div class="col-md-7">
      <label for="input-circuit">Circuit</label>
      <input type="text" class="form-control" id="input-circuit" required>
    </div>
    <div class="col-md-8">
      <label for="input-image">Image</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="prepend-image">@</span>
        </div>
        <input type="text" class="form-control" id="input-image"  aria-describedby="prepend-image" required>
      </div>
    </div>
    <div class="col-md-4">
      <label for="input-price">Prix</label>
      <input type="text" class="form-control" id="input-price" required>
    </div>
  </div>
</form>
`;

function displayDestinations() {
    let tableContent = document.getElementById("destination-tables").innerHTML = "";
    destinations.forEach((element, index) => {
        document.getElementById("destination-tables").innerHTML +=
            `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card">
                    <img src="${element.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.country}</h5>
                        <p class="card-text">${element.circuit}</p>
                        <button class="btn btn-primary">Réserver</button>
                        <button class="btn btn-danger remove-button" value="${index}">Supprimer</button>
                        <button class="btn btn-success modify-button" value="${index}">Modifier</button>
                    </div>
                    <div class="card-footer text-muted">
                        ${element.price}€
                    </div>
                </div>
            </div>
            `
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
    document.getElementById("title-modal").innerText = "Créer une destination";
    document.getElementById("form-destination").innerHTML = form;
    document.getElementById("submit-destination").addEventListener("click", createDestination);
    $("#form-modal").modal('show')
}

function displayFormToModify(event) {
    let index = event.toElement.value;
    let destination = destinations[index];
    document.getElementById("form-destination").innerHTML = form;
    document.getElementById("input-country").value = destination.country;
    document.getElementById("input-circuit").value = destination.circuit;
    document.getElementById("input-image").value = destination.image;
    document.getElementById("input-price").value = destination.price;
    document.getElementById("submit-destination").value = index;
    document.getElementById("submit-destination").addEventListener("click", modifyDestination);
    $("#form-modal").modal('show')
}

window.addEventListener("load", function () {
    displayDestinations();
    loadEvents();
});