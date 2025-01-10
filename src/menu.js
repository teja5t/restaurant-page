function makeMenu() {
    const content = document.querySelector("#content");
    content.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'Macarons by Eric';
    content.appendChild(title);
}

export { makeMenu };