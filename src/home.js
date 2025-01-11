import { clearContent, addElement } from './helpers';

function makeHome() {
    clearContent();
    document.body.classList.add('home');
    document.querySelector('#home').classList.add('selected');
    addElement('h1', 'title', "Macarons by Tejas");
    addElement('p', 'description', "Welcome to Macarons by Tejas! Indulge in the delicate artistry of our handcrafted macarons. With vibrant colors, exquisite flavors, and a melt-in-your-mouth texture, our macarons are perfect for any occasion. Whether you're celebrating a milestone, giving a thoughtful gift, or simply treating yourself, Macarons by Tejas is here to make every moment sweeter.")
}

export { makeHome };