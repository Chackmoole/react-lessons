import React from 'react';
import { StyledButton } from 'components/Button/styled';

const Button = (props) => {
  // console.log(props);
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
