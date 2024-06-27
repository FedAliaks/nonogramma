import createNode from '../../createNode';
import { createGameField } from '../gameFiield/createGameField';
import startFields from '../gameFiield/startFields';
import './changeField.css';

function handlerClick(level) {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup__close');

  const modalContainer = createNode(
    'div',
    ['modal__container', 'modal__change-game'],
    null
  );
  popup.append(modalContainer);
  Object.keys(startFields).forEach((key) => {
    if (key.startsWith(level)) {
      const element = createNode('div', ['change-element'], key);
      modalContainer.append(element);
    }
  });

  modalContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('change-element')) {
      const name = event.target.innerText;
      createGameField(startFields[name], name);

      popup.classList.add('popup__close');
      popup.innerHTML = '';
    }
  });
}

export default function createChangeFieldBlock() {
  const changeContainer = createNode('div', ['change-field__container'], null);

  const easyElement = createNode('div', ['change-element'], 'Easy');
  const mediumElement = createNode('div', ['change-element'], 'Medium');
  const hardElement = createNode('div', ['change-element'], 'Hard');

  changeContainer.append(easyElement, mediumElement, hardElement);
  changeContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('change-element')) {
      handlerClick(e.target.innerText.toLowerCase());
    }
  });

  return changeContainer;
}
