const destinations = [
    {country: "France", circuit: "Paris/Grenoble", image: "image/grenoble.jpg", price: 3000},
    {country: "Brésil", circuit: "Rio/Brasilia", image: "image/rio.jpg", price: 10},
    {country: "Australie", circuit: "Camberra/Sydney", image: "image/sydney.jpg", price: 1000},
    {country: "Japon", circuit: "Coupe du monde", image: "image/japon.jpg", price: 40000}
];

function displayDestinations() {
    console.log("la");
    destinations.forEach(element => {
        document.getElementById("destination-tables").innerHTML +=
            `<tr>
                <td>${element.country}</td>
                <td>${element.circuit}</td>
                <td><img src="${element.image}" alt=""></td>
                <td>${element.price}€</td>
                <td><button>Réserver</button></td>
            </tr>`
    });
}

window.addEventListener("load", displayDestinations);