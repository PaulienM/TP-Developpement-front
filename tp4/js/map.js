let mymap = L.map('localisation', {scrollWheelZoom: false});

const agences = [
    {
        name: 'Agence de Paris',
        lat: 48.865260,
        lng: 2.345217,
        main: false,
        desc: "Voyagez dans le monde entier !",
        phone: "04 12 34 56 78",
        mail: "paris@agence.com"
    },
    {
        name: 'Agence de Grenoble',
        lat: 45.183247,
        lng: 5.726168,
        main: true,
        desc: "Découvrez les plus belles randonnées dans les Alpes !",
        phone: "04 87 65 43 21",
        mail: "grenoble@agence.com"
    },
    {
        name: 'Agence de Lyon',
        lat: 45.745499,
        lng: 4.864155,
        main: false,
        desc: "Voyagez dans toute l'Europe !",
        phone: "04 99 99 99 99",
        mail: "lyon@agence.com"
    }

];

let icon = L.icon({
    iconUrl: 'image/map-icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 46],
    popupAnchor: [0, -46]
});

let mainIcon = L.icon({

    iconUrl: 'image/map-icon-main.png',
    iconSize: [50, 50],
    iconAnchor: [25, 46],
    popupAnchor: [0, -46]
});

let markerList = [];
agences.forEach(agence => {
    let popup = L.popup()
        .setContent(`<p>${agence.name}</p>`);
    let marker = L.marker([agence.lat, agence.lng], {icon: agence.main ? mainIcon : icon})
        .bindPopup(popup);
    //On ajoute les marker dans une liste de marker
    markerList.push(marker);
});

//On ajoute la liste de marker à la carte
let group = L.featureGroup(markerList).addTo(mymap);

//On centre la carte sur la liste de marker
mymap.fitBounds(group.getBounds());

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    textSize: 100,
    center: [45.183247, 5.726168],
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicGF1bGllbm0iLCJhIjoiY2s0Y2d0NWR6MGJiaDNubTA2em9yOHp6cyJ9.7O3jnSvnzqVpy2CvrCvoKw\n',
    zoomOffset: -1,
    tileSize: 512,
    maxZoom: 22
}).addTo(mymap);

const information = document.getElementById('informations');
const assistance = document.getElementById('assistance');

agences.forEach(agence => {
    information.innerHTML += `
<div class="col-4 mb-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${agence.name}</h5>
            <p class="card-text">${agence.desc}</p>
        </div>
    </div>
</div>`;

    assistance.innerHTML += `
<div class="col-4 mb-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${agence.name}</h5>
            <p class="card-text">${agence.phone}</p>
            <p class="card-text">${agence.mail}</p>
        </div>
    </div>
</div>`;
});

document.onkeydown = (e) => {
    //on active le zoom avec la roulette si on appuie sur ctrl
    if (e.key === "Control") {
        mymap.scrollWheelZoom.enable();
    }
};

document.onkeyup = (e) => {
    //on desactive le zoom avec la roulette si on appuie sur ctrl
    if (e.key === "Control") {
        mymap.scrollWheelZoom.disable();
    }
};