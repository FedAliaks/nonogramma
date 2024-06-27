import createNode from '../../../../createNode';
import './listWinners.css';

function closeModal() {
  const popup = document.querySelector('.popup');
  popup.innerHTML = '';
  popup.classList.add('popup__close');
}

function addModalContainer() {
  const modalContainer = createNode(
    'div',
    ['modal__container', 'modal__winner'],
    null
  );

  const title = createNode('p', ['modal-title'], 'List of winners');
  modalContainer.append(title);

  const listWinners = JSON.parse(localStorage.getItem('listWinners')).split(
    ';'
  );

  const winnersSection = createNode('div', ['winners-section'], null);
  modalContainer.append(winnersSection);

  const element = createNode('div', ['winner'], null);

  element.append(createNode('p', ['winner-element'], 'Time'));
  element.append(createNode('p', ['winner-element'], 'Level'));
  element.append(createNode('p', ['winner-element'], `Name of game`));

  winnersSection.append(element);

  listWinners.forEach((item) => {
    if (item) {
      const elementNode = createNode('div', ['winner'], null);

      const winner = item.split('-');

      elementNode.append(createNode('p', ['winner-element'], winner[0]));
      elementNode.append(createNode('p', ['winner-element'], winner[1]));
      elementNode.append(
        createNode('p', ['winner-element'], `${winner[1]}-${winner[2]}`)
      );

      winnersSection.append(elementNode);
    }
  });

  const modalButton = createNode('div', ['modal__button'], 'Close window');
  modalButton.addEventListener('click', closeModal);

  modalContainer.append(modalButton);

  return modalContainer;
}

function openModalWinners() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup__close');
  popup.innerHTML = '';

  popup.append(addModalContainer());
}

export default function createListWinnersElement() {
  const element = createNode('div', ['header__button'], 'Winners');
  element.addEventListener('click', openModalWinners);

  return element;
}
