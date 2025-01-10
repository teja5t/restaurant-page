function makeHome() {
    const title = document.createElement('h1');
    title.textContent = 'Macarons by Tejas';

    const description = document.createElement('p');
    description.textContent = 'The finest macarons delivered straight to your door.'

    const content = document.querySelector("#content");
    content.textContent = '';
    content.appendChild(title);
    content.appendChild(description);
}

export { makeHome };