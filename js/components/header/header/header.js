import createNode from '../../../createNode';
import { createOpenAnswerElement } from '../header-component/openAnswer/openAnswer';
import createRandomGameElement from '../header-component/randomGme/randomGame';
import resetElement from '../header-component/reset-element/reset-element';

import createListWinnersElement from '../header-component/listWinners/listWinners';
import './header.css';
import createDarkThema from '../header-component/darkThema/darkThema';
import createSaveGameElement from '../header-component/saveGame/saveGame';

export default function createHeaderSection() {
  const headerSection = createNode('div', ['header'], null);

  const timerSection = createNode(
    'div',
    ['timer-section', 'header__button'],
    null
  );
  headerSection.append(timerSection);

  headerSection.append(createOpenAnswerElement());

  headerSection.append(createSaveGameElement());

  headerSection.append(createListWinnersElement());
  headerSection.append(createRandomGameElement());
  headerSection.append(createDarkThema());

  headerSection.append(resetElement());

  return headerSection;
}
