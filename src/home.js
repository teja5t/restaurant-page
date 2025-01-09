function makeHome() {
    const content = document.querySelector("#content");
    content.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'Macarons by Tejas';
    content.appendChild(title);
}

export { makeHome };