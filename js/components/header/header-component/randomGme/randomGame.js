import createNode from '../../../../createNode';
import { createGameField } from '../../../gameFiield/createGameField';
import startFields from '../../../gameFiield/startFields';
import './randomGame.css';

function handleRandomGame() {
  const arrFields = [];

  Object.keys(startFields).forEach((item) => arrFields.push(item));

  const random = arrFields[Math.floor(Math.random() * arrFields.length)];
  createGameField(startFields[random], random);
}

export default function createRandomGameElement() {
  const element = createNode('div', ['header__button'], 'Random game');
  element.addEventListener('click', handleRandomGame);
  return element;
}
