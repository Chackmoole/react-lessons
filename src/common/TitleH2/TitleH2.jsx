import React from 'react';

import { StyledTitleH2 } from './styled';

const TitleH2 = (props) => {
  return <StyledTitleH2 {...props}>{props.children}</StyledTitleH2>;
};

export default TitleH2;
