import data from '../services/characterData';

const CHARACTER_MAIN_LEVELS_LEVEL = document.querySelector(
  '.character_main-levels-Level'
);
const CHARACTER_MAIN_LEVELS_PROFESSION = document.querySelector(
  '.character_main-levels-profession'
);
const CHARACTER_MAIN_LEVELS_FEATURES = document.querySelector(
  '.character_main-levels-features'
);
const CHARACTER_MAIN_LEVELS_LIST = document.querySelector(
  '.character_main-levels-list'
);

const setLevelData = async (levelsData) => {
  CHARACTER_MAIN_LEVELS_LIST.innerHTML = '';
  CHARACTER_MAIN_LEVELS_LEVEL.innerHTML = levelsData[0].level;
  CHARACTER_MAIN_LEVELS_PROFESSION.innerHTML = levelsData[0].prof_bonus;
  CHARACTER_MAIN_LEVELS_FEATURES.innerHTML =
    'Choose the level from list to display features';

  levelsData.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item.level;
    li.addEventListener('click', async (e) => {
      CHARACTER_MAIN_LEVELS_LEVEL.innerHTML =
        levelsData[e.target.innerHTML - 1].level;
      CHARACTER_MAIN_LEVELS_PROFESSION.innerHTML =
        levelsData[e.target.innerHTML - 1].prof_bonus;

      if (data.levels[e.target.innerHTML - 1].features.length !== 0) {
        await data.fetchSpecificLevel(
          `https://www.dnd5eapi.co${
            data.levels[e.target.innerHTML - 1].features[0].url
          }`
        );
        CHARACTER_MAIN_LEVELS_FEATURES.innerHTML = await data.levelsFeature
          .desc[0];
      } else {
        CHARACTER_MAIN_LEVELS_FEATURES.innerHTML = 'No data';
      }
    });

    CHARACTER_MAIN_LEVELS_LIST.appendChild(li);
  });
};

export default setLevelData;
