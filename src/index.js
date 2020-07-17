import './styles/main.scss';
import navListShow from './utils/navListShow';
import SceneChange from './services/sceneChange';
import data from './services/characterData';
import characterAnimation from './utils/characterAnimation';
import setCharacterData from './utils/setCharacterData';
import setLevelData from './utils/setLevelData';

const LOGO = document.querySelector('.logo');
const LANDING_CHARACTER_LIST = document.querySelectorAll('.landing_character');
const CHARACTER_INFO_NAV = document.querySelector('.character_nav');
const LEVEL = document.querySelector('.character_main-level');
const NAV_EXPANDED = document.querySelectorAll('.nav_category-expand');

const scene = new SceneChange('landing');

navListShow();
characterAnimation();

LOGO.addEventListener('click', () => {
  scene.change('landing');
});

NAV_EXPANDED.forEach((element) => {
  Array.from(element.children).forEach((character) => {
    character.addEventListener('click', async () => {
      scene.change('character');
      scene.change('levelsOff');
      await data.fetchData(
        'https://www.dnd5eapi.co/api/classes/',
        character.innerHTML
      );
      setCharacterData(
        character.innerHTML,
        data.hitPoint,
        data.subclass,
        data.proficiences
      );
    });
  });
});

LANDING_CHARACTER_LIST.forEach((character) => {
  character.addEventListener('click', async () => {
    scene.change('character');
    await data.fetchData(
      'https://www.dnd5eapi.co/api/classes/',
      character.firstElementChild.innerHTML
    );
    setCharacterData(
      character.firstElementChild.innerHTML,
      data.hitPoint,
      data.subclass,
      data.proficiences
    );
  });
});

Array.from(CHARACTER_INFO_NAV.children).forEach((element) => {
  element.addEventListener('click', async (character) => {
    scene.change('levelsOff');
    await data.fetchData(
      'https://www.dnd5eapi.co/api/classes/',
      character.target.innerHTML
    );

    setCharacterData(
      character.target.innerHTML,
      data.hitPoint,
      data.subclass,
      data.proficiences
    );
  });
});

LEVEL.addEventListener('click', async () => {
  await data.fetchDataLevels(
    'https://www.dnd5eapi.co/api/classes/',
    `${data.characterName}/levels`
  );
  setLevelData(data.levels);
  scene.change('levelsOn');
});
