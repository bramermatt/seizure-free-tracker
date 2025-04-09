const lastSeizureDate = new Date('2023-12-29');
const today = new Date();
const diffTime = Math.abs(today - lastSeizureDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const diffMonths = Math.floor(diffDays / 30);
const diffYears = Math.floor(diffMonths / 12);

const years = diffYears;
const months = diffMonths % 12;
const days = diffDays % 30;

const trackerText = `Everett Bramer is ${years} year(s), ${months} month(s), and ${days} day(s) seizure free.`;
document.getElementById('seizure-free-tracker').textContent = trackerText;