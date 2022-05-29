import React from 'react';
import { StyledCrossSaleItem, StyledTitle } from 'components/CrossSaleItem/CrossSaleItem.styled';
import Button from 'common/Button/Button';
import Text from 'common/Text/Text';

const CrossSaleItem = ({ name, price, weight }) => {
  return (
    <StyledCrossSaleItem>
      <StyledTitle forwardedAs="h3" variant="h3">
        {name}
      </StyledTitle>
      <Text width="244px">{weight}</Text>
      <Text width="60px" mr="30px">
        {price} Р.
      </Text>
      <Button width="240px">заказать</Button>
    </StyledCrossSaleItem>
  );
};

export default CrossSaleItem;
