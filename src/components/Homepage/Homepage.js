import React from 'react';
import About from './About/About';
import Diaporama from './Diaporama/Diaporama';
import Products from './Products/Products';
import Referencement from './Referencement/Referencement';

const Homepage = ( {notify} ) => {
  return (
    <>
    <Diaporama />
    <Referencement /> 
    <Products notify={notify}/>
    <About />
    </>
  )
}

export default Homepage