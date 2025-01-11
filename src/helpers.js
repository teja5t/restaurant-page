const content = document.querySelector("#content");

function clearContent() {
    document.body.setAttribute('class', '');
    document.querySelectorAll('button').forEach((element) => element.setAttribute('class', ''));
    content.textContent = "";
}

function addElement(type, id, text) {
    const element = document.createElement(type);
    element.classList.add('home');
    element.id = id;
    element.textContent = text;
    content.appendChild(element);
}

function addFlavor(image, name, description) {
    const container = document.createElement('div');
    container.classList.add('flavor');
    container.id = name.split(' ').join('-');

    /*const flavorImage = document.createElement('img');
    flavorImage.src = image;
    flavorImage.alt = name;*/

    const flavorImage = document.createElement('div');
    flavorImage.classList.add('flavor-image');
    container.appendChild(flavorImage);

    const textContainer = document.createElement('div');
    textContainer.classList.add('flavor-text');

    const flavorName = document.createElement('h2');
    flavorName.textContent = name;
    flavorName.classList.add('flavor-name');
    textContainer.appendChild(flavorName);

    const flavorDescription = document.createElement('p');
    flavorDescription.textContent = description;
    flavorDescription.classList.add('flavor-description');
    textContainer.appendChild(flavorDescription);

    container.appendChild(textContainer);
    content.appendChild(container);
}

export { clearContent, addElement, addFlavor };