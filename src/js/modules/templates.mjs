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
            <h3>${data.name}</h3>
            <p>${data.description}</p>
            <p>${data.directionsInfo}</p>
        </li>
    `;
}

export function activitiesTemplate(activities) {
    return activities.map(activity => `<li>${activity.name}</li>`).join('');
}
