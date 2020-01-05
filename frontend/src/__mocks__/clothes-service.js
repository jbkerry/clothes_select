export const mockData = [
  {
    id: 1,
    clothing_type: 'JU',
    readable_name: 'test name 1',
  },
  {
    id: 2,
    clothing_type: 'JU',
    readable_name: 'test name 2',
  },
  {
    id: 3,
    clothing_type: 'TR',
    colour: 'blue',
    image_path: 'http://127.0.0.1/media/clothing_images/trousers.png',
    readable_name: 'blue trousers',
  },
  {
    id: 4,
    clothing_type: 'TR',
    colour: 'red',
    image_path: null,
    readable_name: 'red trousers',
  },
];
const mockGetClothes = jest.fn().mockImplementation((clothingType) => (
  Promise.resolve(mockData.filter((data) => data.clothing_type === clothingType))
));
const mock = jest.fn().mockImplementation(() => ({ getClothes: mockGetClothes }));

export default mock;
