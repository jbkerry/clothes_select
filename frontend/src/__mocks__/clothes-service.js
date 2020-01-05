const mockData = [
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
];
const mockGetClothes = jest.fn().mockImplementation((clothingType) => (
  Promise.resolve(mockData.filter((data) => data.clothing_type === clothingType))
));
const mock = jest.fn().mockImplementation(() => ({ getClothes: mockGetClothes }));

export default mock;
