const mockData = [
  {
    id: 1,
    readable_name: 'test name 1',
  },
  {
    id: 2,
    readable_name: 'test name 2',
  },
];
const mockGetClothes = jest.fn();
mockGetClothes.mockReturnValue(Promise.resolve(mockData));
const mock = jest.fn().mockImplementation(() => ({ getClothes: mockGetClothes }));

export default mock;
