import './css/reset.css';
import './css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import profile from './assets/images/profile-nobg.webp';
import facebook from './assets/images/facebook.svg';
import github from './assets/images/github.svg';
import linkedin from './assets/images/linkedin.svg';
import menu from './assets/images/burger-black.svg';
import { projects } from './projects.js';
import { renderCard } from './render-projects.js';

const link_wrapper = document.querySelector('.nav-wrapper .links');

const menuElem = document.querySelector('.menu');
menuElem.src = menu;

menuElem.addEventListener('click', (event) => {
  event.stopPropagation();
  link_wrapper.classList.toggle('visible');
});

document.body.addEventListener('click', () => {
  link_wrapper.classList.remove('visible');
});

const profileElem = document.querySelector('.profile');
profileElem.src = profile;

const socialsElem = document.querySelector('.socials');

const images = [facebook, github, linkedin];

images.forEach((svg) => {
  const img = document.createElement('img');
  img.src = svg;
  img.alt = `${svg} icon`;
  socialsElem.appendChild(img);
});

//
const portfolioElem = document.querySelector('.portfolio');

projects.forEach((project) => {
  portfolioElem.appendChild(
    renderCard(
      project.name,
      project.desciption,
      project.image,
      project.altText,
      project.github,
      project.preview,
    ),
  );
});

window.addEventListener('resize', () => {
  console.log(window.innerWidth, window.innerHeight);
});
