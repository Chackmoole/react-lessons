import React from 'react';
import Product from '../Product/Product';
import ShowMoreCard from '../ShowMoreCard/ShowMoreCard';
import { StyledWrapper, StyledCatalog } from 'components/Catalog/styled';
import { data } from './data';
import Text from 'common/Text/Text';

const Catalog = () => {
  return (
    <StyledCatalog>
      <Text mb="84px" variant="h1" as="h1">
        Каталог продукции
      </Text>
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
