import React from 'react';
import {
  StyledCrossSaleWeight,
  StyledCrossSaleItem,
  StyledCrossSaleTitle,
  StyledCrossSaleButton,
  StyledCrossSalePrice,
} from 'components/CrossSaleItem/CrossSaleItem.styled';

const CrossSaleItem = ({ name, price, weight }) => {
  return (
    <StyledCrossSaleItem>
      <StyledCrossSaleTitle>{name}</StyledCrossSaleTitle>
      <StyledCrossSaleWeight>{weight}</StyledCrossSaleWeight>
      <StyledCrossSalePrice>{price} Р.</StyledCrossSalePrice>
      <StyledCrossSaleButton>заказать</StyledCrossSaleButton>
    </StyledCrossSaleItem>
  );
};

export default CrossSaleItem;
