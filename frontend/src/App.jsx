import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import './App.css';
import ClothesService from './clothes-service';

const clothesService = new ClothesService();

const App = ({ name }) => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    clothesService.getClothes().then((result) => {
      setClothes(result);
    });
  }, []);

  return (
    <div>
      <span>
        Hello {name}
      </span>
      <div>
        Clothes:<br />
        <ul className="clothes">
          {clothes.map((item) => (
            <li key={item.id}>{item.readable_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
