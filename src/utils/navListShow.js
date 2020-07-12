const NAV_BTN = document.querySelectorAll('.nav_btn');

const navListShow = () => {
  NAV_BTN.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.nextElementSibling.classList.remove('hiddenList');
      button.nextElementSibling.classList.add('showList');
    });
    button.parentElement.addEventListener('mouseleave', () => {
      button.nextElementSibling.classList.remove('showList');
      button.nextElementSibling.classList.add('hiddenList');
    });
  });
};

export default navListShow;
