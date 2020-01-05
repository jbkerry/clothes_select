import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ClothesList, { ClothesImage } from '../Clothes';
import { mockData } from '../__mocks__/clothes-service';

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

it('ClothesList renders a table td for each item', async () => {
  act(() => {
    render(<ClothesList clothingType="JU" />, container);
  });
  const clothesItems = await container.getElementsByClassName('name-cell');
  expect(clothesItems.length).toBe(2);
  expect(clothesItems[0].innerHTML).toEqual('test name 1');
  expect(clothesItems[1].innerHTML).toEqual('test name 2');
});

describe('Test ClothesImage', () => {
  it('ClothesImage shows approriate text when no image path', () => {
    const clothingItem = mockData[3];
    act(() => {
      render(<ClothesImage imagePath={clothingItem.image_path} />, container);
    });
    const spanBlocks = container.getElementsByTagName('span');
    expect(spanBlocks[0].innerHTML).toEqual('No image available');
    const imgBlocks = container.getElementsByTagName('img');
    expect(imgBlocks.length).toBe(0);
  });

  it('ClothesImage display an image source when path is supplied', () => {
    const clothingItem = mockData[2];
    act(() => {
      render(<ClothesImage imagePath={clothingItem.image_path} altText={clothingItem.readable_name} />, container);
    });
    const imgBlocks = container.getElementsByTagName('img');
    expect(imgBlocks.length).toBe(1);
    const image = imgBlocks[0];
    expect(image.src).toEqual('http://127.0.0.1/media/clothing_images/trousers.png');
    expect(image.alt).toEqual('blue trousers');
  });
});
