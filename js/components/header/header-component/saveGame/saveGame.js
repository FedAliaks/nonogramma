import createNode from '../../../../createNode';
import {
  createGameField,
  getStartArray,
  getStartName,
} from '../../../gameFiield/createGameField';
import startFields from '../../../gameFiield/startFields';
import './saveGame.css';

function handlerSaveGame() {
  localStorage.setItem('nameGame', getStartName());
  localStorage.setItem('arrayGame', getStartArray());

  const tempArray = [];
  const cellsOnField = document.querySelectorAll('.cell');
  cellsOnField.forEach((item) => {
    if (item.classList.contains('cell_checked')) {
      tempArray.push('leftClick');
    } else if (item.classList.contains('diagonal')) {
      tempArray.push('rightClick');
    } else {
      tempArray.push(null);
    }
  });

  localStorage.setItem('array', JSON.stringify(tempArray));
}

function handlerLoadGame() {
  const nameArray = localStorage.getItem('nameGame');
  const start = localStorage.getItem('array');
  const startArray = JSON.parse(start);

  if (nameArray) {
    createGameField(startFields[nameArray], nameArray);

    const cellsOnField = document.querySelectorAll('.cell');
    startArray.forEach((item, index) => {
      if (item === 'leftClick') {
        cellsOnField[index].click();
      }

      if (item === 'rightClick') {
        const rightClick = new MouseEvent('contextmenu', {
          button: 1,
          which: 1,
        });

        cellsOnField[index].dispatchEvent(rightClick);
      }
    });
  }
}

export default function createSaveGameElement() {
  const element = createNode('div', ['header__save-container'], null);

  const saveGame = createNode('div', ['header__button'], 'Save game');
  saveGame.addEventListener('click', handlerSaveGame);
  element.append(saveGame);
  const loadGame = createNode('div', ['header__button'], 'Load game');
  loadGame.addEventListener('click', handlerLoadGame);
  element.append(loadGame);

  return element;
}
