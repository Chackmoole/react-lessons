import React from 'react';
import IconGift from 'common/icons/IconGift';
import { StyledGiftBlock, StyledGiftBlockDescription } from 'components/GiftBlock/GiftBlock.styled';

const GiftBlock = () => {
  return (
    <StyledGiftBlock>
      <IconGift />
      <StyledGiftBlockDescription>
        Закажите все и получите чехол для кота в подарок!
      </StyledGiftBlockDescription>
    </StyledGiftBlock>
  );
};

export default GiftBlock;
