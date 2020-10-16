// import functions and grab DOM elements
import { saveUser } from './utils.js';
// initialize state
const form = document.querySelector('form');
// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(form);

    saveUser({

        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 35,
        completed: {}
    });
 
    window.location.href = './map/';
});