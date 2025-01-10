import "./styles.css";
import { makeHome } from "./home";
import { makeMenu } from './menu';
import { makeAbout } from './about';

makeHome();

document.querySelector('#home').addEventListener('click', makeHome);
document.querySelector('#menu').addEventListener('click', makeMenu);
document.querySelector('#about').addEventListener('click', makeAbout);