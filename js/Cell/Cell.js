/* eslint-disable import/no-cycle */
import { addCheckedCeils, subtractCheckedCeil } from '../checkWinGame';
import createNode from '../createNode';
import { checkStartTimer } from '../components/header/header-component/timer/timer';
import './cell.css';

export default class Cell {
  isChecked = false;

  value;

  indexX;

  indexY;

  constructor({ value, indexX, indexY }) {
    this.value = Boolean(value);
    this.indexX = indexX;
    this.indexY = indexY;
  }

  createCellarNode() {
    const classes = ['cell'];
    if ((this.indexX + 1) % 5 === 0) classes.push('cell_right-bold');
    if ((this.indexY + 1) % 5 === 0) classes.push('cell_bottom-bold');
    if (this.indexX === 0) classes.push('cell_left-bold');
    if (this.indexY === 0) classes.push('cell_top-bold');
    const id = `${this.indexX}-${this.indexY}`;
    this.element = createNode('div', classes, null, id);

    this.element.addEventListener('click', (event) =>
      this.leftClick(event, this.element)
    );
    this.element.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.rightClick(event, this.element);
    });

    return this.element;
  }

  rightClick(event, element) {
    const audio = new Audio();
    audio.src = '/click.mp3';
    audio.play();

    checkStartTimer();
    element.classList.toggle('diagonal');

    if (this.isChecked) {
      this.isChecked = !this.isChecked;

      if (this.value && this.isChecked) addCheckedCeils();
      if (this.value && !this.isChecked) subtractCheckedCeil();
      if (!this.value && this.isChecked) subtractCheckedCeil();
    }

    element.classList.remove('cell_checked');
  }

  leftClick(event, element) {
    const audio = new Audio();
    audio.src = '/click.mp3';
    audio.play();

    element.classList.toggle('cell_checked');
    element.classList.remove('diagonal');
    checkStartTimer();

    this.isChecked = !this.isChecked;
    if (this.value && this.isChecked) addCheckedCeils();
    if (this.value && !this.isChecked) subtractCheckedCeil();
    if (!this.value && this.isChecked) subtractCheckedCeil();
  }
}
