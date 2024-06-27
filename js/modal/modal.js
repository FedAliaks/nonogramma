/* eslint-disable import/no-cycle */
import createNode from '../createNode';
import { createGameField } from '../components/gameFiield/createGameField';
import { getCurrentTimeFromTimer } from '../components/header/header-component/timer/timer';
import './modal.css';

function startNewGame() {
  createGameField();
  const popup = document.querySelector('.popup');
  popup.classList.add('popup__close');
  popup.innerHTML = '';
}

export default function openModalWinGame() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup__close');
  const modalContainer = createNode('div', ['modal__container'], null);
  popup.append(modalContainer);

  modalContainer.classList.remove('popup__close');

  const modalContent = createNode(
    'p',
    ['modal__content'],
    `You have solved the nonogram in ${getCurrentTimeFromTimer()} seconds!`
  );
  modalContainer.append(modalContent);

  const modalButton = createNode('div', ['modal__button'], 'Try again');
  modalButton.addEventListener('click', startNewGame);
  modalContainer.append(modalButton);
}
