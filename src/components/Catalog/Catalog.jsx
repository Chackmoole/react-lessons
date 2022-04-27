import React from 'react';
import Product from '../Product/Product';
import TitleH1 from 'components/TitleH1/TitleH1';
import { StyledWrapper, StyledCatalog } from 'components/Catalog/styled';

import productImage1 from 'src/assets/images/product1.png';
import productImage1Max from 'src/assets/images/product1Max.png';
import productImage2 from 'src/assets/images/product2.png';
import productImage2Max from 'src/assets/images/product2Max.png';
import productImage3 from 'src/assets/images/product3.png';
import productImage3Max from 'src/assets/images/product3Max.png';
import productImage4 from 'src/assets/images/product4.png';

const data = [
  {
    weight: '500',
    image: productImage1,
    name: 'Cat Energy PRO 500 г',
    taste: 'Курица',
    price: '700',
  },
  {
    weight: '1000',
    image: productImage1Max,
    name: 'Cat Energy PRO 1000 г',
    taste: 'Курица',
    price: '1000',
  },
  {
    weight: '500',
    image: productImage2,
    name: 'Cat Energy PRO 500 г',
    taste: 'Рыба',
    price: '700',
  },
  {
    weight: '1000',
    image: productImage2Max,
    name: 'Cat Energy PRO 1000 г',
    taste: 'Рыба',
    price: '1000',
  },
  {
    weight: '500',
    image: productImage3,
    name: 'Cat Energy slim 500 г',
    taste: 'Гречка',
    price: '400',
  },
  {
    weight: '1000',
    image: productImage3Max,
    name: 'Cat Energy slim 1000 г',
    taste: 'Гречка',
    price: '700',
  },
  {
    weight: '500',
    image: productImage4,
    name: 'Cat Energy slim 500 г',
    taste: 'Рис',
    price: '500',
  },
];

const Catalog = () => {
  return (
    <StyledCatalog>
      <TitleH1 value="Каталог продукции" />
      <StyledWrapper>
        {data.map((item) => {
          console.log(item);
          return (
            <Product
              weight={item.weight}
              image={item.image}
              name={item.name}
              taste={item.taste}
              price={item.price}
            />
          );
        })}
      </StyledWrapper>
    </StyledCatalog>
  );
};

export default Catalog;
