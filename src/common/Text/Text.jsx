import React from 'react';
import { StyledText } from 'common/Text/Text.styled';

const Text = ({
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
  withBg,
  ...props
}) => {
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
      withBg={withBg}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
