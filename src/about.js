function makeAbout() {
    const content = document.querySelector("#content");
    content.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'About';
    content.appendChild(title);
}

export { makeAbout };