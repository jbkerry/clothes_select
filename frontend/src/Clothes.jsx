import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import './scss/Clothes.scss';

import ClothesService from './clothes-service';

const clothesService = new ClothesService();

const ClothesList = ({ clothingType }) => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    clothesService.getClothes(clothingType).then((result) => {
      setClothes(result);
    });
  }, [clothingType]);

  return (
    <table>
      <tbody>
        {clothes.map((item) => (
          <tr key={item.id}>
            <td className="name-cell">
              {item.readable_name}
            </td>
            <td className="img-cell">
              <img className="clothes-image" src={item.image_path} alt={item.readable_name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ClothesList.propTypes = {
  clothingType: PropTypes.oneOf(['JU', 'TS', 'SI', 'TR', 'SH']).isRequired,
};

export default ClothesList;
