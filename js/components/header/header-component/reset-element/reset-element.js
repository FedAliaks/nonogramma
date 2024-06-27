import createNode from '../../../../createNode';
import { createGameField } from '../../../gameFiield/createGameField';
import './reset-element.css';

function clickResetBtn() {
  createGameField();
}

export default function resetElement() {
  const resetBtnSection = createNode(
    'div',
    ['header__button', 'reset-element'],
    'Reset'
  );

  resetBtnSection.addEventListener('click', clickResetBtn);

  return resetBtnSection;
}
