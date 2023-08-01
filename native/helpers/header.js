import { addBugFender } from './analytics/bug-fender.js';
import { addClarity } from './analytics/clarity.js';
import { challenges } from './challenges.js';

if (window.location.hostname !== 'localhost') {
  addClarity();
  addBugFender();
}

const challengeLink = window.location.pathname.split('machine-coding/')[1].slice(0, -1);
const challenge = challenges.find((challenge) => challenge.link === challengeLink);

const nav = document.createElement('nav');
nav.className = 'global-nav';
const home = document.createElement('a');
const h1 = document.createElement('h1');
const repo = document.createElement('a');
const img = document.createElement('img');
img.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
img.classList.add('github-img');

home.textContent = 'Home';
h1.textContent = challenge.title;
home.href = '/frontend-mini-challenges/native/';
repo.href = 'https://github.com/sadanandpai/frontend-mini-challenges/';
repo.target = '_blank';

repo.appendChild(img);
nav.appendChild(home);
nav.appendChild(h1);
nav.appendChild(repo);

document.body.prepend(nav);
document.title = challenge.title;
