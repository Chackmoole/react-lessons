import React from 'react';
import { StyledText } from 'common/Text/Text.styled';

export const Text = ({
  children,
  variant,
  textCenter,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  width,
  ...props
}) => {
  // console.log(props, 'other props');
  return (
    <StyledText
      variant={variant}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      textCenter={textCenter}
      width={width}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
