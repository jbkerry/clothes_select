import React from 'react';

import './scss/App.scss';

import ClothesList from './Clothes';

const App = () => (
  <div className="container">
    <div className="clothes-list">
      <ClothesList clothingType="JU" />
    </div>
  </div>
);

export default App;
