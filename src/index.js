import './styles/main.scss';
import navListShow from './utils/navListShow';
import SceneChange from './services/sceneChange';
import CharacterData from './services/characterData';

const LOGO = document.querySelector('.logo');
const LANDING_CHARACTER_LIST = document.querySelectorAll('.landing_character');

// import axios from 'axios';
// const fetchingData = async () => {
//   try {
//     const response = await axios.get(
//       'https://www.dnd5eapi.co/api/starting-equipment/8'
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
// console.log(fetchingData().then((e) => console.log(e)));
// // 'https://www.dnd5eapi.co/api/features/favored-enemy-1-type'
// //'https://www.dnd5eapi.co/api/classes'

// const NAV_BTN = document.querySelectorAll('.nav_btn');

// const LOGO = document.querySelector('.logo');
// const BACKGROUND = document.querySelector('.background');
// const CHARACTER_SECTION = document.querySelector('.character');

// LOGO.addEventListener('click', (e) => {
//   BACKGROUND.classList.add('backgroundZoom');
//   setTimeout(() => {
//     console.log(CHARACTER_SECTION.classList);

//     CHARACTER_SECTION.classList.remove('hidden');
//     console.log(CHARACTER_SECTION.classList);
//     CHARACTER_SECTION.classList.add('show');
//     console.log(CHARACTER_SECTION.classList);
//   }, 2000);
// });

const scene = new SceneChange();
const data = new CharacterData();

navListShow();

scene.change('landing');

LOGO.addEventListener('click', () => {
  if (scene.name === 'character') scene.change('landing');
});

LANDING_CHARACTER_LIST.forEach((character) => {
  character.addEventListener('click', () => {
    if (scene.name === 'landing') {
      scene.change('character');
      data.fetchData(character.firstElementChild.innerHTML);
    }

    console.log(character.firstElementChild.innerHTML);
  });
});
