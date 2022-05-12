import React from 'react';
import {
  StyledTitleH2,
  StyledImg,
  StyledCard,
  StyledInner,
  StyledProductText,
  StyledProductButton,
} from 'components/Product/styled';

const Product = ({ name, weight, image, price, taste }) => {
  return (
    <li>
      <StyledCard>
        <StyledImg src={image} alt={name} />
        <StyledTitleH2>{name}</StyledTitleH2>
        <StyledInner>
          <StyledProductText>Масса</StyledProductText>
          <StyledProductText>{weight} г</StyledProductText>
        </StyledInner>
        <StyledInner>
          <StyledProductText>Вкус</StyledProductText>
          <StyledProductText>{taste}</StyledProductText>
        </StyledInner>
        <StyledInner>
          <StyledProductText>Цена</StyledProductText>
          <StyledProductText>{price} Р.</StyledProductText>
        </StyledInner>
        <StyledProductButton>заказать</StyledProductButton>
      </StyledCard>
    </li>
  );
};

export default Product;
