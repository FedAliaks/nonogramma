/* eslint-disable import/no-cycle */
import Cell from '../../Cell/Cell';
import { addGoalCheckedCeils, resetGoalCheckedCeils } from '../../checkWinGame';
import createNode from '../../createNode';
import { resetTimer } from '../header/header-component/timer/timer';
import startFields from './startFields';
import './gameField.css';

let startArray = startFields['easy-Pyramid'];
let startName = 'easy-Pyramid';

function createLeftColumnWithIndexes(array) {
  const answer = [];
  array.forEach((item) => {
    const temp = item
      .join('')
      .split('0')
      .filter((itemArr) => itemArr)
      .map((itemValue) => itemValue.length);
    answer.push(temp);
  });

  return answer;
}

function createTopColumnWithIndexes(array) {
  const answer = [];
  const { length } = array;
  for (let i = 0; i < length; i += 1) {
    const tempArray = [];
    array.forEach((item) => {
      tempArray.push(item[i]);
    });
    const tempAnswer = tempArray
      .join('')
      .split('0')
      .filter((item) => item)
      .map((item) => item.length);
    answer.push(tempAnswer);
  }

  return answer;
}

function addNumbersInLine(array) {
  const line = createNode('div', ['vertical-line'], null);
  array.forEach((item) => {
    const cell = createNode('div', ['number'], item);
    line.appendChild(cell);
  });

  return line;
}

export function createGameField(startField, name) {
  /* eslint-disable no-param-reassign */
  if (!startField) {
    startField = startArray;
  } else {
    startArray = startField;
  }

  if (name) startName = name;

  resetTimer();
  resetGoalCheckedCeils();

  const gameFieldContainer = document.querySelector('.game-field__container');
  gameFieldContainer.innerHTML = '';

  const widthGameField = gameFieldContainer.offsetWidth - 70;
  const countOfCell = startField.length;
  gameFieldContainer.style.setProperty(
    '--with-cell',
    `${widthGameField / countOfCell}px`
  );

  const gameField = createNode('div', ['game-field'], null);
  gameField.style.width = `${widthGameField}px`;
  gameFieldContainer.appendChild(gameField);

  startField.forEach((lineY, indexY) => {
    lineY.forEach((item, indexX) => {
      if (item === 1) {
        addGoalCheckedCeils();
      }
      const element = new Cell({
        value: item,
        indexX,
        indexY,
      }).createCellarNode();
      gameField.appendChild(element);
    });
  });

  const leftColumnBlock = createNode('div', ['game-field__left-numbers'], null);
  gameFieldContainer.appendChild(leftColumnBlock);

  const leftNumbersArray = createLeftColumnWithIndexes(startField);
  leftNumbersArray.forEach((item) => {
    const elementLine = createNode(
      'div',
      ['game-field__left-line'],
      item.join(' ')
    );
    leftColumnBlock.appendChild(elementLine);
  });

  const topRowBlock = createNode('div', ['game-field__top-numbers'], null);
  gameFieldContainer.appendChild(topRowBlock);

  const topNumbersArray = createTopColumnWithIndexes(startField);

  topNumbersArray.forEach((item) => {
    const elementLine = addNumbersInLine(item);
    topRowBlock.appendChild(elementLine);
  });
}

export function getStartArray() {
  return startArray;
}

export function getStartName() {
  return startName;
}
