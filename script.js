import { getDogCollection } from './dogApi.js';
import './dog-card.js';
import './app-banner.js';

function renderDogs(dogCollection) {
  Object.values(dogCollection).forEach(dogData => {
    const dogCard = document.createElement('dog-card')
    dogCard.breed = dogData.breed;
    dogCard.img = dogData.picture;
    const dogsWrapper = document.querySelector('#dogsWrapper');
    dogsWrapper.appendChild(dogCard)
  });
}

window.addEventListener('load', async () => {
  const dogCollection = await getDogCollection(5);
  console.log('---->: dogCollection', dogCollection)
  renderDogs(dogCollection);
})
