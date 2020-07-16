const CHARACTER_INFO_SECTION = document.querySelector('.characterInfo');
const BACKGROUND = document.querySelector('.background');
const LANDING = document.querySelector('.landing');

const sceneLanding = () => {
  BACKGROUND.classList.add('backgroundZoom');
  LANDING.classList.remove('showFlex');
  LANDING.classList.add('hidden');
  setTimeout(() => {
    CHARACTER_INFO_SECTION.classList.remove('hidden');
    CHARACTER_INFO_SECTION.classList.add('show');
  }, 2000);
};

export default sceneLanding;
