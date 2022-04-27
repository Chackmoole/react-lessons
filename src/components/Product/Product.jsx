import React from 'react';
import {
  StyledTitle,
  StyledImg,
  StyledCard,
  StyledInner,
  StyledProductText,
  StyledProductButton,
} from 'components/Product/styled';

const Product = (props) => {
  // console.log(props, 'props');
  return (
    <li>
      <StyledCard>
        <StyledImg src={props.image} alt={props.name} />
        <StyledTitle>{props.name}</StyledTitle>
        <StyledInner>
          <StyledProductText>Масса</StyledProductText>
          <StyledProductText>{props.weight} г</StyledProductText>
        </StyledInner>
        <StyledInner>
          <StyledProductText>Вкус</StyledProductText>
          <StyledProductText>{props.taste}</StyledProductText>
        </StyledInner>
        <StyledInner>
          <StyledProductText>Цена</StyledProductText>
          <StyledProductText>{props.price} Р.</StyledProductText>
        </StyledInner>
        <StyledProductButton>заказать</StyledProductButton>
      </StyledCard>
    </li>
  );
};

export default Product;
