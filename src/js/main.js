import { getParkData, getInfoLinks } from "./modules/parkService.mjs";
import { mediaCardTemplate } from "./modules/templates.mjs";
import { setHeaderFooter } from "./modules/setHeaderFooter.mjs";
import '../css/home.css';


function enableNavigation() {
    // Use a querySelector to get the menu buttons

    // When the main menu button is clicked:
    menuButton.addEventListener("click", (e) => {
        let target = e.target;
        // Toggle the show class on the global-nav

        // Check to see if target is the button or something inside the button

        // Check to see if we just opened or closed the menu

        // If we opened it then set the aria-expanded attribute on the button to true

        // If we closed it then set the aria-expanded attribute on the button to false
    })
}


function setParkInfo(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
    `;
}

function setParkInfoLinks(links) {
    const info = document.querySelector(".info");
    const info_cards = links.map(info => mediaCardTemplate(info));

    info.innerHTML = info_cards.join('');
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    
    setHeaderFooter(parkData);
    setParkInfo(parkData);
    setParkInfoLinks(links);
}

init();
