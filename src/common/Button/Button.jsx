import React from 'react';
import { StyledButton } from 'common/Button/Button.styled';

const Button = ({ children, width, ...props }) => {
  console.log(props);
  return (
    <StyledButton width={width} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
