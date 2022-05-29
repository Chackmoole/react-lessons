import React from 'react';
import { StyledButton } from 'common/Button/Button.styled';

const Button = ({ children, width, height, titleText, ...props }) => {
  // console.log(props);
  return (
    <StyledButton width={width} height={height} titleText={titleText} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
