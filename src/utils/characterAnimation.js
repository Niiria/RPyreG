const LANDING_CHARACTER_LIST = document.querySelectorAll('.landing_character');

const characterAnimation = () => {
  LANDING_CHARACTER_LIST.forEach((character) => {
    character.addEventListener('mouseover', () => {
      character.children[0].classList.remove('hiddenP');
      character.children[0].classList.add('showP');
    });
    character.addEventListener('mouseleave', () => {
      character.children[0].classList.remove('showP');
      character.children[0].classList.add('hiddenP');
    });
  });
};

export default characterAnimation;
