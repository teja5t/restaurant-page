import { clearContent, addElement, addFlavor } from "./helpers";
import blueberryLemon from "./images/blueberry-lemon.jpeg";
import matcha from "./images/matcha.jpeg";
import oreo from "./images/oreo.jpeg";
import strawberryCheesecake from "./images/strawberry-cheesecake.jpeg";
import blackberryLavender from "./images/blackberry-lavender.jpeg";
import vanillaBean from "./images/vanilla-bean.jpeg";


function makeMenu() {
    clearContent();
    addElement('h1', 'menu-title', "Menu");
    addFlavor(blueberryLemon, "Blueberry Lemon", "A perfect balance of tangy lemon and sweet blueberry, this macaron is a burst of freshness in every bite.");
    addFlavor(matcha, "Matcha", "Earthy and aromatic, our matcha macaron is a delight for green tea lovers, blending authentic matcha flavor with a hint of sweetness.");
    addFlavor(oreo, "Oreo", "A creamy, chocolatey treat inspired by everyone's favorite cookie, complete with a crunchy twist.");
    addFlavor(strawberryCheesecake, "Strawberry Cheesecake", "Indulge in the rich, creamy essence of cheesecake paired with the sweetness of ripe strawberries.");
    addFlavor(blackberryLavender, "Blackberry Lavender", "A sophisticated combination of tart blackberries and fragrant lavender for a truly unique taste.");
    addFlavor(vanillaBean, "Vanilla Bean", "Simple yet elegant, our vanilla bean macaron is made with the finest vanilla for a classic flavor.");
}

export { makeMenu };