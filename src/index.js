import './styles/main.scss';
import navListShow from './utils/navListShow';
import SceneChange from './services/sceneChange';
import CharacterData from './services/characterData';
import characterAnimation from './utils/characterAnimation';
import setCharacterData from './utils/setCharacterData';

const LOGO = document.querySelector('.logo');
const LANDING_CHARACTER_LIST = document.querySelectorAll('.landing_character');

// // 'https://www.dnd5eapi.co/api/features/favored-enemy-1-type'
// //'https://www.dnd5eapi.co/api/classes/'

const scene = new SceneChange('landing');
const data = new CharacterData();

navListShow();
characterAnimation();
scene.change(scene.name);

LOGO.addEventListener('click', () => {
  if (scene.name === 'character') scene.change('landing');
});
LANDING_CHARACTER_LIST.forEach((character) => {
  character.addEventListener('click', async () => {
    if (scene.name === 'landing') {
      scene.change('character');
      await data.fetchData(
        'https://www.dnd5eapi.co/api/classes/',
        character.firstElementChild.innerHTML
      );
      setCharacterData(
        character.firstElementChild.innerHTML,
        data.hitPoint,
        data.subclass
      );
    }
  });
});
