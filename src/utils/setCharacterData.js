const CHARACTER_INFO_NAV = document.querySelector('.character_nav');
const CHARACTER_INFO_IMG = document.querySelector('.character_img');
const NAV_CATEGORY_EXPAND = document.querySelectorAll('.nav_category-expand');
const CHARACTER_INFO_MAIN_LEFT_HITPOINTS = document.querySelector(
  '.character_main-left-hitPoints'
);
const CHARACTER_INFO_MAIN_LEFT_SUBCLASS = document.querySelector(
  '.character_main-left-subclass'
);
const CHARACTER_INFO_MAIN_RIGHT_PROFICIENCES = document.querySelector(
  '.character_main-right-list'
);

const setCharacterData = (characterName, hitPoints, subclass, proficiences) => {
  NAV_CATEGORY_EXPAND.forEach((li) => {
    const CHILD_ARRAY = Array.from(li.children);

    CHILD_ARRAY.forEach((children) => {
      if (characterName === children.innerHTML) {
        CHARACTER_INFO_IMG.src = `./src/assests/img/characters/${li.id}_anime.png`;

        CHILD_ARRAY.forEach((element, index) => {
          CHARACTER_INFO_NAV.children[index].innerHTML = element.innerHTML;
          if (CHARACTER_INFO_NAV.children[index].innerHTML === characterName) {
            CHARACTER_INFO_NAV.children[index].classList.add(
              'underlineCharacterNav'
            );
          } else {
            CHARACTER_INFO_NAV.children[index].classList.remove(
              'underlineCharacterNav'
            );
          }
        });
      }
    });
  });

  CHARACTER_INFO_MAIN_LEFT_HITPOINTS.innerHTML = hitPoints;
  CHARACTER_INFO_MAIN_LEFT_SUBCLASS.innerHTML = subclass;

  CHARACTER_INFO_MAIN_RIGHT_PROFICIENCES.innerHTML = '';
  proficiences.forEach((element, index) => {
    const li = document.createElement('li');
    li.innerHTML = proficiences[index].name;
    CHARACTER_INFO_MAIN_RIGHT_PROFICIENCES.appendChild(li);
  });
};

export default setCharacterData;
