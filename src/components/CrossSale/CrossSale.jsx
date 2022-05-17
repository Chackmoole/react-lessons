import React from 'react';
import CrossSaleItem from 'components/CrossSaleItem/CrossSaleItem';
import { crossSaleData } from './crossSaleData';
import { StyledCrossSale } from 'components/CrossSale/CrossSale.styled';
import GiftBlock from 'components/GiftBlock/GiftBlock';

export const CrossSale = () => {
  return (
    <StyledCrossSale>
      <ul>
        {crossSaleData.map((item) => {
          // console.log(item);
          return (
            <CrossSaleItem key={item.id} name={item.name} price={item.price} weight={item.weight} />
          );
        })}
      </ul>
      <GiftBlock />
    </StyledCrossSale>
  );
};

export default CrossSale;
