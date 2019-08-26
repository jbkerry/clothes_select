import PropTypes from 'prop-types';
import React from 'react';

import './App.css';

const App = ({ name }) => (
  <span>
    Hello {name}
  </span>
);
App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
