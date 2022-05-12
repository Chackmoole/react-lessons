import React from 'react';
import {
  StyledAddCardWrapper,
  StyledIconAdd,
  StyledProductButtonAdd,
  StyledAddCardInner,
  StyledCardDescription,
  StyledShowMoreTitle,
} from './styled';

const ShowMoreCard = () => {
  return (
    <StyledAddCardWrapper>
      <StyledAddCardInner>
        <div>
          <StyledIconAdd />
          <StyledShowMoreTitle>Показать еще 100500 товаров</StyledShowMoreTitle>
          <StyledCardDescription>На самом деле вкусов гораздо больше!</StyledCardDescription>
        </div>
        <StyledProductButtonAdd>показать все</StyledProductButtonAdd>
      </StyledAddCardInner>
    </StyledAddCardWrapper>
  );
};

export default ShowMoreCard;
