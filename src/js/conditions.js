import { getParkData, getAlerts, getVisitorCenterData } from './modules/parkService.mjs';
import { setHeaderFooter } from './modules/setHeaderFooter.mjs';
import { activitiesTemplate, alertTemplate, visitorCenterTemplate } from './modules/templates.mjs';
import { enableNavigation } from "./modules/navigation.mjs";
import '../css/conditions.css';

function setAlerts(alerts) {
    const html = alerts.map(alertTemplate).join('');
    document.querySelector('.alerts > ul').innerHTML = html;
}

function setVisitorCenters(data) {
    const html = data.map(visitorCenterTemplate).join('');
    document.querySelector('.visitor ul').innerHTML = html;
}

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);

    const alerts = await getAlerts();
    setAlerts(alerts);

    const visitorCenterData = await getVisitorCenterData();
    setVisitorCenters(visitorCenterData);

    document.querySelector('.activities ul').innerHTML = activitiesTemplate(parkData.activities);

    enableNavigation();
}

init();
