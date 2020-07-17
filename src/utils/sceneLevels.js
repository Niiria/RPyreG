const CHARACTER_INFO_MAIN_TEXT = document.querySelector('.character_main-text');
const CHARACTER_INFO_MAIN_LEVELS = document.querySelector(
  '.character_main-levels'
);

const sceneLevels = async (state) => {
  if (state) {
    CHARACTER_INFO_MAIN_TEXT.classList.remove('show');
    CHARACTER_INFO_MAIN_TEXT.classList.add('hidden');
    CHARACTER_INFO_MAIN_LEVELS.classList.remove('hidden');
    CHARACTER_INFO_MAIN_LEVELS.classList.add('show');
  } else {
    CHARACTER_INFO_MAIN_TEXT.classList.remove('hidden');
    CHARACTER_INFO_MAIN_TEXT.classList.add('show');
    CHARACTER_INFO_MAIN_LEVELS.classList.remove('show');
    CHARACTER_INFO_MAIN_LEVELS.classList.add('hidden');
  }
};

export default sceneLevels;
