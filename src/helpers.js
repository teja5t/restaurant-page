const content = document.querySelector("#content");

function clearContent() {
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

    const flavorImage = document.createElement('img');
    flavorImage.src = image;
    flavorImage.alt = name;
    flavorImage.classList.add('flavor-image');
    container.appendChild(flavorImage);

    const flavorName = document.createElement('h1');
    flavorName.textContent = name;
    flavorName.classList.add('flavor-name');
    container.appendChild(flavorName);

    const flavorDescription = document.createElement('p');
    flavorDescription.textContent = description;
    flavorDescription.classList.add('flavor-description');
    container.appendChild(flavorDescription);

    content.appendChild(container);
}

export { clearContent, addElement, addFlavor };