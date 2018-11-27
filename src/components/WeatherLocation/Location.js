import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city})=> (//destructuring 
  <div className="LocationCont">
 
  	<h1>Buenos Aires!</h1>
  </div>
   
);

Location.propTypes = {
 city : PropTypes.string.isRequired,
};
export default Location;