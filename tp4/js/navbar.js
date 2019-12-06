let locationArr = document.location.pathname.split("/");
let fileName = locationArr[locationArr.length - 1];
const navbar = `

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav row justify-content-around w-100">
      <li class="nav-item ${fileName === "index.html" ? "active" : ""}">
        <a class="nav-link" href="index.html">Acceuil</a>
      </li>
      <li class="nav-item dropdown ${fileName === "menu.html" ? "active" : ""}">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="menu.html">connexion</a>
          <a class="dropdown-item" href="menu.html">Recherche</a>
          <a class="dropdown-item" href="menu.html">Reservation</a>
        </div>
      </li>
      <li class="nav-item ${fileName === "services.html" ? "active" : ""}">
        <a class="nav-link" href="services.html">Services</a>
      </li>
      <li class="nav-item ${fileName === "destinations.html" ? "active" : ""}">
        <a class="nav-link" href="destinations.html">Destinations</a>
      </li>
      <li class="nav-item ${fileName === "audio.html" ? "active" : ""}">
        <a class="nav-link" href="audio.html">Voyage virtuel : audio</a>
      </li>
      <li class="nav-item ${fileName === "video.html" ? "active" : ""}">
        <a class="nav-link" href="video.html">Voyage virtuel : vidéo</a>
      </li>
      <li class="nav-item ${fileName === "contact.html" ? "active" : ""}">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>
</nav>
`;

window.addEventListener("load", function () {
    document.getElementById("navbar").innerHTML = navbar;
});