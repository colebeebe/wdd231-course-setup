import { getParkData, getInfoLinks } from "./modules/parkService.mjs";
import { mediaCardTemplate } from "./modules/templates.mjs";
import { setHeaderFooter } from "./modules/setHeaderFooter.mjs";
import '../css/home.css';

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
