let burger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((element) =>
  element.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Task 2:

let heroDiv = document.createElement('div');
heroDiv.classList.add('wrapper');

let imageHero = document.createElement('img');
imageHero.setAttribute('src', 'images/honeymaking.jpg');
imageHero.setAttribute('alt', 'Image');
imageHero.style.height = '100%';
imageHero.style.width = '100%';

let headingHero = document.createElement('h2');
headingHero.classList.add('title');
headingHero.innerText = 'Bee honey making';
headingHero.style.fontSize = '30px';
headingHero.style.color = 'red';

heroDiv.appendChild(imageHero);
heroDiv.appendChild(headingHero);

document.getElementById('hero').appendChild(heroDiv);

// Task 3:

document.querySelectorAll('.grt').forEach(function (item) {
  let parag = document.createElement('p');
  parag.classList.add('text');
  parag.textContent = 'Hello';
  parag.style.fontSize = '24px';

  item.appendChild(parag);
});
