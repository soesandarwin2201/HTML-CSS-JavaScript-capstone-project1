import speaker from './data.js';

const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-100%)';
});

const featureContainer = document.getElementById('speaker-wrapper');

window.addEventListener('DOMContentLoaded', () => {
  let displayFeatureSection = speaker.map((person) => `
  <article class="single-speaker">
      <img src="${person.personImg}" alt="speaker 1" class="speaker-img">
      <div class="speaker-info">
        <h2 class="speaker-name">${person.personName}</h2>
        <p class="speaker-job">${person.personJob}</p>

        <p class="speaker-text">${person.persontext}</p>
      </div>
     </article>`);

  displayFeatureSection = displayFeatureSection.join('');
  featureContainer.innerHTML = displayFeatureSection;
});