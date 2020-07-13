class SceneChanger {
  change(name) {
    this.name = name;
    const CHARACTER_INFO_SECTION = document.querySelector('.characterInfo');
    const BACKGROUND = document.querySelector('.background');
    const LANDING = document.querySelector('.landing');
    const LANDING_CHARACTER_LIST = document.querySelectorAll(
      '.landing_character'
    );
    if (name === 'character') {
      BACKGROUND.classList.add('backgroundZoom');
      LANDING.classList.remove('showFlex');
      LANDING.classList.add('hidden');
      setTimeout(() => {
        CHARACTER_INFO_SECTION.classList.remove('hidden');
        CHARACTER_INFO_SECTION.classList.add('show');
      }, 2000);
    }
    if (name === 'landing') {
      if (BACKGROUND.classList[1] === 'backgroundZoom') {
        BACKGROUND.classList.remove('backgroundZoom');
        CHARACTER_INFO_SECTION.classList.remove('show');
        CHARACTER_INFO_SECTION.classList.add('hidden');
        setTimeout(() => {
          LANDING.classList.remove('hidden');
          LANDING.classList.add('showFlex');
        }, 2000);
      }

      const NAV_BTN = document.querySelectorAll('.nav_btn');
      LANDING_CHARACTER_LIST.forEach((character) => {
        character.addEventListener('mouseover', () => {
          character.children[0].classList.remove('hiddenP');
          character.children[0].classList.add('showP');
        });
        character.addEventListener('mouseleave', () => {
          character.children[0].classList.remove('showP');
          character.children[0].classList.add('hiddenP');
        });
        character.addEventListener('click', () => {
          NAV_BTN[0].value = character.children[0].innerHTML;
        });
      });
    }
  }
}
export default SceneChanger;
