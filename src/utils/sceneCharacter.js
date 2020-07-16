const CHARACTER_INFO_SECTION = document.querySelector('.characterInfo');
const BACKGROUND = document.querySelector('.background');
const LANDING = document.querySelector('.landing');

const sceneCharacter = () => {
  if (BACKGROUND.classList[1] === 'backgroundZoom') {
    BACKGROUND.classList.remove('backgroundZoom');
    CHARACTER_INFO_SECTION.classList.remove('show');
    CHARACTER_INFO_SECTION.classList.add('hidden');
    setTimeout(() => {
      LANDING.classList.remove('hidden');
      LANDING.classList.add('showFlex');
    }, 2000);
  }
};

export default sceneCharacter;
