let locationArr = document.location.pathname.split("/");
let fileName = locationArr[locationArr.length - 1];
const navbar = `
    <ul class="no-list-style menu-list">
        <li><a href="index.html" ${fileName === "index.html" ? 'class="active"' : ""}>Acceuil</a></li>
        <li>
            <a id="menu" href="menu.html" ${fileName === "menu.html" ? 'class="active"' : ""}>Menu</a>
            <ul class="no-list-style dropdown">
                <li><a href="menu.html">connexion</a></li>
                <li><a href="menu.html">Recherche</a></li>
                <li><a href="menu.html">Reservation</a></li>
            </ul>
        </li>
        <li><a href="services.html" ${fileName === "services.html" ? 'class="active"' : ""}>Services</a></li>
        <li><a href="destinations.html" ${fileName === "destinations.html" ? 'class="active"' : ""}>Destinations</a></li>
        <li><a href="audio.html" ${fileName === "audio.html" ? 'class="active"' : ""}>Voyage virtuel : audio</a></li>
        <li><a href="video.html" ${fileName === "video.html" ? 'class="active"' : ""}>Voyage virtuel : vidéo</a></li>
        <li><a href="contact.html" ${fileName === "contact.html" ? 'class="active"' : ""}>Contact</a></li>
    </ul>
`;

window.addEventListener("load", function() {
   document.getElementById("navbar").innerHTML = navbar;
});