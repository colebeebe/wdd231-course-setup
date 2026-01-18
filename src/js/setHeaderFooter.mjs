import { footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
    const disclaimerLink = document.querySelector(".disclaimer > a");
    disclaimerLink.textContent = data.fullName;
    disclaimerLink.href = data.url;

    document.title = data.fullName;

    const heroImage = document.querySelector(".hero > img");
    const imageInfo = data.images[0];
    heroImage.src = imageInfo.url;
    heroImage.alt = imageInfo.altText;

    const heroTitle = document.querySelector(".hero-title");
    heroTitle.textContent = data.name;
    const designation = document.querySelector(".park-designation");
    designation.textContent = data.designation;
    const states = document.querySelector(".park-states");
    states.textContent = data.states;
}

export function setHeaderFooter(data) {
    setHeaderInfo(data);
    document.querySelector("#park-footer").innerHTML = footerTemplate(data);
}