import { getParkData } from './modules/parkService.mjs';
import { getParkVisitorCenterDetails } from './modules/parkService.mjs';
import { setHeaderFooter } from './modules/setHeaderFooter.mjs';
import { enableNavigation } from './modules/navigation.mjs';
import { vcTitleTemplate, vcInfoTemplate, vcAddressesListTemplate, vcDirectionsTemplate, vcAmenityTemplate, vcContactsTemplate, vcImageTemplate } from './modules/templates.mjs';
import '../css/home.css';
import '../css/visitor-center.css';

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function fillPage(centerDetails) {
    let html = `
        <h1 class="vc-name">
            ${vcTitleTemplate(centerDetails.name)}
        </h1>
        <section class="vc-info">
            ${vcInfoTemplate(centerDetails)}
        </section>
        <section class="vc-details-list">
            <details name="vc-details" id="vcAddresses">
                <summary>
                    <svg class="icon" role="presentation" focusable="false">
                    <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/images/sprite.symbol.svg#heading-icon_map-pin"
                    ></use>
                    </svg>
                    Addresses
                </summary>
                ${vcAddressesListTemplate(centerDetails.addresses)}
            </details>
            <details name="vc-details" id="vcDirections">
            <summary>
                <svg class="icon" role="presentation" focusable="false">
                <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/images/sprite.symbol.svg#directions"
                ></use>
                </svg>
                Directions
            </summary>
            ${vcDirectionsTemplate(centerDetails.directionsInfo)}
            </details>
            <details name="vc-details" id="vcAmenities">
            <summary>
                <svg class="icon" role="presentation" focusable="false">
                <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/images/sprite.symbol.svg#heading-icon_info"
                ></use>
                </svg>
                Amenities
            </summary>
            <ul>
                ${centerDetails.amenities.map(vcAmenityTemplate).join('')}
            </ul>
            </details>
            <details name="vc-details" id="vcContact">
            <summary>
                <svg class="icon" role="presentation" focusable="false">
                <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/images/sprite.symbol.svg#phone"
                ></use>
                </svg>
                Contact Information
            </summary>
            ${vcContactsTemplate(centerDetails.contacts)}
            </details>
            <section class="vc-gallery">
                <h2>
                <svg class="icon" role="presentation" focusable="false">
                    <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/images/sprite.symbol.svg#camera-alt"
                    ></use>
                </svg>
                Image Gallery
                </h2>
                <ul>
                    ${centerDetails.images.map(vcImageTemplate).join('')}
                </ul>
            </section>
        </section>
    `;

    document.querySelector('#main').insertAdjacentHTML('beforeend', html);
}

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);

    const id = getParam('id');
    const centerDetails = await getParkVisitorCenterDetails(id);
    fillPage(centerDetails);
    console.log(centerDetails);

    enableNavigation();
}

init();
