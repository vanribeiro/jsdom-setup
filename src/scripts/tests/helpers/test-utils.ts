import document from './document';

function render(html: any) {
  const container = document?.createElement('div');
  container.innerHTML = html;
  const queryByTestId = (testId: any) =>
    container.querySelector(`[data-testid="${testId}"]`);

  const asFragment = () =>
    document.createRange().createContextualFragment(container.innerHTML);

  document.body.innerHTML = '';
  document.body.appendChild(container);

  return {container, queryByTestId, asFragment}
}

export {render}