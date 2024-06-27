/* eslint-disable import/no-cycle */
import { getStartName } from './components/gameFiield/createGameField';
import { getCurrentTimeFromTimer } from './components/header/header-component/timer/timer';
import openModalWinGame from './modal/modal';

let checkedCeils = 0;
let goalCheckedCells = 0;

function updateListOfWinners() {
  const time = getCurrentTimeFromTimer();
  const nameOfGame = getStartName();

  let listWinners = JSON.parse(localStorage.getItem('listWinners'));

  if (!listWinners) {
    listWinners = `${time}-${nameOfGame};`;
  } else {
    listWinners += `;${time}-${nameOfGame};`;

    const arr = listWinners.split(';').slice(0, -1);

    arr.sort((a, b) => {
      const elem1 = +b.slice(0, b.indexOf('-'));
      const elem2 = +a.slice(0, a.indexOf('-'));

      return elem2 - elem1;
    });

    if (arr.length > 6) arr.length = 6;

    listWinners = arr.join(';');
  }

  localStorage.setItem('listWinners', JSON.stringify(listWinners));
}

function checkWin() {
  if (checkedCeils === goalCheckedCells) {
    openModalWinGame();
    const audio = new Audio();
    audio.src = '/final.mp3';
    audio.play();
    updateListOfWinners();
  }
}

export function addGoalCheckedCeils() {
  goalCheckedCells += 1;
}

export function resetGoalCheckedCeils() {
  goalCheckedCells = 0;
  checkedCeils = 0;
}

export function addCheckedCeils() {
  checkedCeils += 1;
  if (checkedCeils === goalCheckedCells) checkWin();
}

export function subtractCheckedCeil() {
  checkedCeils -= 1;
}

// последние 5 результатов побед сохраняются в таблице рекордов. Таблица сортируется по времени игры в формате XX:XX
// (например, с помощью LocalStorage). В каждой строке должны быть указаны: решенная головоломка (либо название, либо картинка, либо и то, и другое);
// сложность; результат секундомера.
