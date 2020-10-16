import missions from '../missions/data.js';


const ul = document.querySelector('ul');


missions.forEach(mission => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    const image = document.createElement('img');


    li.appendChild(link);

    image.src = `../assets/${mission.mapImage}`;
    link.textContent = mission.title;
    link.appendChild(image);


    link.href = `../missions/?id=${mission.id}`;


    ul.append(li);
});

