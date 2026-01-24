import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

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
