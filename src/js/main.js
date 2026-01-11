import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimerLink = document.querySelector(".disclaimer > a");
disclaimerLink.textContent = parkData.fullName;
disclaimerLink.href = parkData.url;

document.title = parkData.fullName;

const heroImage = document.querySelector(".hero > img");
const imageInfo = parkData.images[0];
heroImage.src = imageInfo.url;
heroImage.alt = imageInfo.altText;

const heroTitle = document.querySelector(".hero-title");
heroTitle.textContent = parkData.name;
const designation = document.querySelector(".park-designation");
designation.textContent = parkData.designation;
const states = document.querySelector(".park-states");
states.textContent = parkData.states;
