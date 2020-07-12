const NAV_BTN = document.querySelectorAll('.nav_btn');

const navListShow = () => {
  NAV_BTN.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.nextElementSibling.classList.remove('hidden');
      button.nextElementSibling.classList.add('show');
    });
    button.parentElement.addEventListener('mouseleave', () => {
      button.nextElementSibling.classList.remove('show');
      button.nextElementSibling.classList.add('hidden');
    });
  });
};

export default navListShow;
