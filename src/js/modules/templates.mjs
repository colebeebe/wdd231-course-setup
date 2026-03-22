import spritePath from '../../images/sprite.symbol.svg';

export function mediaCardTemplate(info) {
    return `
        <div class="media-card">
            <a href="${info.link}">
                <img src="${info.image}" alt="${info.name}" class="media-card__img" />
                <h3 class="media-card__title">${info.name}</h3>
                <p>${info.description}</p>
            </a>
        </div>
    `;
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}
function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}
export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `
        <section class="contact">
            <h3>Contact Info</h3>
            <h4>Mailing Address:</h4>
            <div>
                <p>${mailing.line1}<p>
                <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
            </div>
            <h4>Phone:</h4>
            <p>${voice}</p>
        </section>
    `;
}

export function alertTemplate(alert) {
    let alertType = "";
    if (alert.category === 'Park Closure') {
        alertType = 'closure';
    }
    else {
        alertType = alert.category.toLowerCase();
    }
    
    return `
        <li class="alert">
        <svg class="icon" focusable="false" aria-hidden="true">
            <use xlink:href="${spritePath}#alert-${alertType}"></use>
        </svg>
        <div>
            <h3 class="alert-${alertType}">${alert.title}</h3>
            <p>${alert.description}</p>
        </div>
        </li>
    `;
}

export function visitorCenterTemplate(data) {
    return `
        <li>
            <h3> <a href="visitor-center.html?id=${data.id}">${data.name}</a> </h3>
            <p>${data.description}</p>
            <p>${data.directionsInfo}</p>
        </li>
    `;
}

export function activitiesTemplate(activities) {
    return activities.map(activity => `<li>${activity.name}</li>`).join('');
}

function iconTemplate(icon) {
    return `
        <svg>
            <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="/images/sprite.symbol.svg#${icon}"
            ></use>
        </svg>
    `;
}

export function vcTitleTemplate(text) {
    return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
    const image = data.images[0];
    return `
        <figure>
            <img src="${image.url}" alt="${image.altText}" />
            <figcaption>${image.caption} <span>${image.credit}</span> </figcaption>
        </figure>
        <p>${data.description}</p>
    `;
}

export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join('')}</ul>`;
}

function vcAddressTemplate(data) {
    return `
        <section>
            <h3>${data.type} Address</h3>
            <address>
                ${data.line1} <br />
                ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
        </section>
    `;
}

export function vcAddressesListTemplate(data) {
    const physical = data.find((address) => address.type === "Physical");
    const mailing = data.find((address) => address.type === "Mailing");
    let html = vcAddressTemplate(physical);
    if (mailing) {
        html += vcAddressTemplate(mailing);
    }
    return html;
}

export function vcAmenityTemplate(data) {
    return `<li>${data}</li>`;
}

export function vcDirectionsTemplate(data) {
    return `<p>${data}</p>`;
}

export function vcContactsTemplate(data) {
    return `
        <section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
        </section>
        <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
        </section>
    `;
}

export function vcImageTemplate(data) {
    return `<li> <img src="${data.url}" alt="${data.altText}" /> </li>`
}
