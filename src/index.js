import './css/reset.css';
import './css/style.css';

import bear from './assets/images/bear.jpg';
import facebook from './assets/images/facebook.svg';
import github from './assets/images/github.svg';
import linkedin from './assets/images/linkedin.svg';
import menu from './assets/images/burger.svg';

const link_wrapper = document.querySelector('.nav-wrapper .links');

const menuElem = document.querySelector('.menu');
menuElem.src = menu;

menuElem.addEventListener('click', () => {
  link_wrapper.classList.toggle('visible');
});

const profileElem = document.querySelector('.profile');
profileElem.src = bear;

const socialsElem = document.querySelector('.socials');

const images = [facebook, github, linkedin];

images.forEach((svg) => {
  const img = document.createElement('img');
  img.src = svg;
  img.alt = `${svg} icon`;
  socialsElem.appendChild(img);
});
