import React from 'react';
import { StyledVisuallyHidden } from 'common/VisuallyHidden/styled';

const VisuallyHidden = ({ children }) => {
  return <StyledVisuallyHidden>{children}</StyledVisuallyHidden>;
};

export default VisuallyHidden;
