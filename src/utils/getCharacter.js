const getCharacter = () => {
  const CHARACTER_LIST = document.querySelectorAll('.landing_character');
  CHARACTER_LIST.forEach((character) => {
    character.addEventListener('mouseover', () => {
      character.previousElementSibling.classList.remove('hiddenP');
      character.previousElementSibling.classList.add('showP');
    });
    character.addEventListener('mouseleave', () => {
      character.previousElementSibling.classList.remove('showP');
      character.previousElementSibling.classList.add('hiddenP');
    });
    character.addEventListener(
      'click',
      () => character.previousElementSibling.innerHTML
    );
  });
};

export default getCharacter;

// export let CHARACTER_LIST = document.querySelectorAll('.landing_character');
// CHARACTER_LIST.forEach((character) => {
//   character.addEventListener('click', () => {
//     console.log('cos');
//   });
// });
