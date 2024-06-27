import './createPage.css';

import createNode from '../createNode';

import createChangeFieldBlock from '../components/changeFieldBlock/changeField';
import { createGameField } from '../components/gameFiield/createGameField';
import { createTimerSection } from '../components/header/header-component/timer/timer';
import createHeaderSection from '../components/header/header/header';

export default function createPage() {
  const appElement = document.querySelector('#app');
  const body = document.querySelector('body');
  body.classList.add('body');

  /*   appElement.append(timerSection); */

  appElement.append(createHeaderSection());
  createTimerSection();
  const container = createNode('div', ['container'], null);
  appElement.append(container);

  const gameFieldContainer = createNode('div', ['game-field__container'], null);
  container.append(gameFieldContainer);
  createGameField();

  container.append(createChangeFieldBlock());

  const modal = createNode('div', ['popup', 'popup__close'], null);
  appElement.append(modal);
}
