import missions from '../missions/data.js';
const ul = document.getElementById('missions');


missions.forEach(quest => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);
    
    link.textContent = quest.title;
    link.href = `./missions/?id=${missions.id}`;

    ul.append(li);
});