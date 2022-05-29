import React from 'react';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Footer from '../Footer/Footer';
import CrossSale from 'components/CrossSale/CrossSale';

const App = () => {
  return (
    <>
      <Header />
      <Catalog />
      <CrossSale />
      <Footer />
    </>
  );
};

export default App;
