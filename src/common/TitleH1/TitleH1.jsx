import React from 'react';

import { StyledTitleH1 } from 'src/common/TitleH1/styled';

const TitleH1 = (props) => {
  return <StyledTitleH1 {...props}>{props.children}</StyledTitleH1>;
};

export default TitleH1;
