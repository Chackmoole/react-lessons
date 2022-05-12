import React from 'react';
import { StyledButton } from 'src/common/Button/styled';

const Button = ({ children, ...props }) => {
  // console.log(props);
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
