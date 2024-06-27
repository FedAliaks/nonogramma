import createNode from '../../../../createNode';
import './drkThem.css';

function changeDarkLightTheme() {
  const element = document.querySelector('.header__dark-theme');
  if (element.innerText === 'Dark theme') {
    document.documentElement.style.setProperty('--primary-color', '#374709');
    document.documentElement.style.setProperty('--secondary-color', '#F2F2EF');
  } else {
    document.documentElement.style.setProperty('--primary-color', '#F2F2EF');
    document.documentElement.style.setProperty('--secondary-color', '#374709');
  }

  if (element.innerText === 'Light theme') {
    element.innerText = 'Dark theme';
  } else {
    element.innerText = 'Light theme';
  }
}

export default function createDarkThema() {
  const element = createNode(
    'div',
    ['header__button', 'header__dark-theme'],
    'Dark theme'
  );

  element.addEventListener('click', changeDarkLightTheme);

  return element;
}
