import timeout from '../helpers/timeout';

const CHARACTER_INFO_SECTION = document.querySelector('.character');
const BACKGROUND = document.querySelector('.background');
const LANDING = document.querySelector('.landing');

const sceneLanding = async () => {
  BACKGROUND.classList.add('backgroundZoom');
  LANDING.classList.remove('showFlex');
  LANDING.classList.add('hidden');
  await timeout(2000);
  CHARACTER_INFO_SECTION.classList.remove('hidden');
  CHARACTER_INFO_SECTION.classList.add('show');
};

export default sceneLanding;
