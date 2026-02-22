import { getParkData, getInfoLinks } from "./modules/parkService.mjs";
import { mediaCardTemplate } from "./modules/templates.mjs";
import { setHeaderFooter } from "./modules/setHeaderFooter.mjs";
import '../css/home.css';


function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  
  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
  // toggle the show class on the global-nav
  document.querySelector(".global-nav").classList.toggle("show");
  // check to see if ev.target is the button or something inside the button
  if (target.tagName != "BUTTON") {
    target = target.closest("button");
  }
  // check to see if we just opened or closed the menu
  if (document.querySelector(".global-nav").classList.contains("show")) {
    // if we opened it then set the aria-expanded attribute to true
    target.setAttribute("aria-expanded", true);
  } else {
    // if we closed it then set the aria-expanded attribute to false
    target.setAttribute("aria-expanded", false);
  }

  console.log("toggle");
  });
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

    enableNavigation();
}

init();
