import React from 'react';
import Header from 'components/Header/Header';
import Catalog from 'components/Catalog/Catalog';
import Footer from 'components/Footer/Footer';
import CrossSale from 'components/CrossSale/CrossSale';

const CatalogPage = () => {
  return (
    <>
      <Header />
      <Catalog />
      <CrossSale />
      <Footer />
    </>
  );
};

export default CatalogPage;
