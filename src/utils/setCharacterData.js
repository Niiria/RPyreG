const CHARACTER_INFO_NAV = document.querySelector('.characterInfo_nav');
const CHARACTER_INFO_IMG = document.querySelector('.characterInfo_img');
const NAV_BTN_LIST = document.querySelectorAll('.nav_btn-list');
const CHARACTER_INFO_MAIN_LEFT_HITPOINTS = document.querySelectorAll(
  '.characterInfo_main-left-hitPoints'
);
const CHARACTER_INFO_MAIN_LEFT_SUBCLASS = document.querySelectorAll(
  '.characterInfo_main-left-subclass'
);

const setCharacterData = (characterName, hitPoints, subclass) => {
  NAV_BTN_LIST.forEach((li) => {
    const CHILD_ARRAY = Array.from(li.children);

    CHILD_ARRAY.forEach((children) => {
      if (characterName === children.innerHTML) {
        CHILD_ARRAY.forEach((element, index) => {
          CHARACTER_INFO_NAV.children[index].innerHTML = element.innerHTML;
        });
      }
    });
  });
  CHARACTER_INFO_IMG.src = `./src/assests/img/characters/${characterName}_anime.png`;
  CHARACTER_INFO_MAIN_LEFT_HITPOINTS[0].innerHTML = hitPoints;
  CHARACTER_INFO_MAIN_LEFT_SUBCLASS[0].innerHTML = subclass;
};

export default setCharacterData;
