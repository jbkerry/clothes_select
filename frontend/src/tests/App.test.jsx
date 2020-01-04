import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../App';

jest.mock('../clothes-service');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders text as expected', async () => {
  act(() => {
    render(<App name="Bob" />, container);
  });

  const spanElement = container.getElementsByTagName('span')[0];
  expect(spanElement.innerHTML).toEqual('Hello Bob');

  const clothesItems = await container.getElementsByTagName('li');
  expect(clothesItems.length).toBe(2);
  expect(clothesItems[0].innerHTML).toEqual('test name 1');
  expect(clothesItems[1].innerHTML).toEqual('test name 2');
});
