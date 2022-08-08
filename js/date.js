import { DateTime } from './luxon.js';

const displayDate = document.getElementById('time');
const today = DateTime.local();
const newDate = today.set();
displayDate.textContent = newDate
  .setLocale('de')
  .toLocaleString(DateTime.DATETIME_MED);
today.setZone('system');
