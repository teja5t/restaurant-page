import { clearContent, addElement } from './helpers';

function makeAbout() {
    clearContent();
    addElement('h1', 'our-story', "Our Story");
    addElement('p', 'story', `Macarons by Tejas started as a delicious accident. Back in high school, Tejas discovered the joy of making macarons during his tutorial period. While most students were catching up on homework or chatting with friends, Tejas was whisking egg whites and piping batter onto baking sheets.
        The real twist? Tejas quickly realized that his teachers had a soft spot for his macarons. Running late to class? No problem! A box of freshly made macarons was the perfect "bribe" to keep the tardy slips at bay. Soon, his teachers started "conveniently" forgetting to mark him late, and some even placed special flavor requests.
        What began as a creative (and slightly mischievous) way to avoid detention has now grown into a full-fledged business. Today, Tejas crafts macarons with the same passion and humor that started it all, sharing his love for these sweet treats with the world.
        Thank you for making Macarons by Tejas part of your sweetest moments.`)
}

export { makeAbout };