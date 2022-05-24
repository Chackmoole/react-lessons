import React from 'react';
import {
  StyledAddCardWrapper,
  StyledIconAdd,
  StyledProductButtonAdd,
  StyledAddCardInner,
} from './ShowMoreCard.styled';
import Text from 'common/Text/Text';

const ShowMoreCard = () => {
  return (
    <StyledAddCardWrapper>
      <StyledAddCardInner>
        <div>
          <StyledIconAdd />
          <Text mb="24px" textCenter variant="h3" as="h3">
            Показать еще 100500 товаров
          </Text>
          <Text variant="body1" textCenter color="lightGray">
            На самом деле вкусов гораздо больше!
          </Text>
        </div>
        <StyledProductButtonAdd>показать все</StyledProductButtonAdd>
      </StyledAddCardInner>
    </StyledAddCardWrapper>
  );
};

export default ShowMoreCard;
