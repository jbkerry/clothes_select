import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ClothesList from '../Clothes';

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
    render(<ClothesList clothingType="JU" />, container);
  });
  // const clothesItems = await container.getElementsByTagName('td');
  const clothesItems = await container.getElementsByClassName('name-cell');
  expect(clothesItems.length).toBe(2);
  expect(clothesItems[0].innerHTML).toEqual('test name 1');
  expect(clothesItems[1].innerHTML).toEqual('test name 2');
});
