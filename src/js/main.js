import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs"
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData()
setHeaderFooter(parkData);

const intro = document.querySelector(".intro");
intro.innerHTML = `
    <h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>
`;

const info = document.querySelector(".info");
const info_cards = parkInfoLinks.map(info => mediaCardTemplate(info));

info.innerHTML = info_cards.join('');

