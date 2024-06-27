export default function createNode(tag, classes, content, id) {
  const element = document.createElement(tag);
  if (classes.length > 0) {
    classes.forEach((item) => element.classList.add(item));
  }

  if (content) {
    element.innerText = content;
  }

  if (id) {
    element.id = id;
  }

  return element;
}
