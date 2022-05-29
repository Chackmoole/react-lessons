import React from 'react';
import CrossSaleItem from 'components/CrossSaleItem/CrossSaleItem';
import { crossSaleData } from './crossSaleData';
import { StyledCrossSale, StyledInner } from './CrossSale.styled';
import GiftBlock from 'components/GiftBlock/GiftBlock';
import Text from 'common/Text/Text';
import BlockWithLine from 'common/BlockWithLine/BlockWithLine';

export const CrossSale = () => {
  return (
    <BlockWithLine>
      <StyledCrossSale>
        <Text variant="h2" as="h2" mb="80px" withBg>
          Дополнительные товары
        </Text>
        <StyledInner>
          <ul>
            {crossSaleData.map((item) => {
              return (
                <CrossSaleItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  weight={item.weight}
                />
              );
            })}
          </ul>
          <GiftBlock />
        </StyledInner>
      </StyledCrossSale>
    </BlockWithLine>
  );
};

export default CrossSale;
