import React from 'react';
import { StyledIndexBanner, StyledInner } from './IndexBanner.styled';
import Text from 'common/Text/Text';
import Button from 'common/Button/Button';

const IndexBanner = () => {
  return (
    <StyledIndexBanner>
      <StyledInner>
        <Text as="h1" variant="h1" mb="40px">
          Функциональное питание для котов
        </Text>
        <Text as="p" variant="h3" mb="52px">
          Занялся собой? Займись котом!
        </Text>
        <Button width="244px" height="48px">
          подобрать программу
        </Button>
      </StyledInner>
    </StyledIndexBanner>
  );
};

export default IndexBanner;
