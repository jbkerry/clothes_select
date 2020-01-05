import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export default class ClothesService {
  getClothes = (clothingType) => {
    const url = `${API_URL}/api/clothes/${clothingType}/`;
    return axios.get(url).then((response) => response.data);
  }
}
