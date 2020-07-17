import timeout from '../helpers/timeout';

const CHARACTER_INFO_SECTION = document.querySelector('.character');
const BACKGROUND = document.querySelector('.background');
const LANDING = document.querySelector('.landing');

const sceneCharacter = async () => {
  BACKGROUND.classList.remove('backgroundZoom');
  CHARACTER_INFO_SECTION.classList.remove('show');
  CHARACTER_INFO_SECTION.classList.add('hidden');
  await timeout(2000);
  LANDING.classList.remove('hidden');
  LANDING.classList.add('showFlex');
};

export default sceneCharacter;
