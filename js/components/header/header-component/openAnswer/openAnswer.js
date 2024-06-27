import createNode from '../../../../createNode';
import './openAnswer.css';
import { getStartArray } from '../../../gameFiield/createGameField';
import { stopTimer } from '../timer/timer';

export function openAnswer() {
  const cell = document.querySelectorAll('.cell');
  const startArray = getStartArray();

  cell.forEach((item) => {
    const coord = item.getAttribute('id').split('-');
    const indexX = +coord[0];
    const indexY = +coord[1];

    if (startArray[indexY][indexX] && item.classList.contains('cell_checked')) {
      /* eslint-disable no-param-reassign */
      item.style.backgroundColor = 'green';
    } else if (startArray[indexY][indexX]) {
      item.style.backgroundColor = 'red';
    } else {
      item.style.backgroundColor = 'white';
    }
  });

  stopTimer();
}

export function createOpenAnswerElement() {
  const openAnswerButton = createNode('div', ['header__button'], 'Open Answer');
  openAnswerButton.addEventListener('click', openAnswer);
  return openAnswerButton;
}
