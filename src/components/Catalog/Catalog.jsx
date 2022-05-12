import React from 'react';
import Product from '../Product/Product';
import ShowMoreCard from '../ShowMoreCard/ShowMoreCard';
import { StyledWrapper, StyledCatalog, StyledTitle } from 'components/Catalog/styled';
import { data } from './data';

const Catalog = () => {
  return (
    <StyledCatalog>
      <StyledTitle>Каталог продукции</StyledTitle>
      <StyledWrapper>
        {data.map((item) => {
          // console.log(item);
          return (
            <Product
              weight={item.weight}
              image={item.image}
              name={item.name}
              taste={item.taste}
              price={item.price}
              key={item.id}
            />
          );
        })}
        <ShowMoreCard />
      </StyledWrapper>
    </StyledCatalog>
  );
};

export default Catalog;
