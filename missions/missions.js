import missions from './data.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const mission = findById(missions, id);

const h2 = document.createElement('h2');

h2.textContent = missions.title;

section.appendChild(h2);

const form = document.createElement('form');

Selection.appendChild(form);

mission.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.appendChildI(label);

});

const button = document.createElement('button');

button.textContent = 'Confirm';

form.appendChild(button);