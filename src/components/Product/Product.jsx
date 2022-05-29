import React from 'react';
import {
  StyledImg,
  StyledCard,
  StyledInner,
  StyledProductButton,
} from 'components/Product/Product.styled';
import Text from 'common/Text/Text';

const Product = ({ name, weight, image, price, taste }) => {
  return (
    <li>
      <StyledCard>
        <StyledImg src={image} alt={name} />
        <Text width="145px" textCenter variant="h3" as="h3" mx="auto" mb="24px">
          {name}
        </Text>
        <StyledInner>
          <Text color="lightGray">Масса</Text>
          <Text color="lightGray">{weight} г</Text>
        </StyledInner>
        <StyledInner>
          <Text color="lightGray">Вкус</Text>
          <Text color="lightGray">{taste}</Text>
        </StyledInner>
        <StyledInner>
          <Text color="lightGray">Цена</Text>
          <Text color="lightGray">{price} Р.</Text>
        </StyledInner>
        <StyledProductButton>заказать</StyledProductButton>
      </StyledCard>
    </li>
  );
};

export default Product;
