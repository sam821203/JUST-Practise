function renderContent(renderInformation) {
  const element = renderInformation.element;
  if (element === 'script' || element === 'SCRIPT') {
    throw new Error('Invalid element.');
  }

  let partialOpeningTag = '<' + element;

  const attributes = renderInformation.attributes;

  for (const attribute of attributes) {
    partialOpeningTag =
      partialOpeningTag + ' ' + attribute.name + '="' + attribute.value + '"';
  }

  const openingTag = partialOpeningTag + '>';

  const closingTag = '</' + element + '>';
  const content = renderInformation.content;

  const template = openingTag + content + closingTag;

  const rootElement = renderInformation.root;

  rootElement.innerHTML = template;
}

// 修改後
function renderContent(renderInformation) {
  const element = renderInformation.element;
  const rootElement = renderInformation.root;

  validateElementType(element);

  const content = createRenderableContent(renderInformation);

  renderOnRoot(rootElement, content);
}