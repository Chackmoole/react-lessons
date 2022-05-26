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
  whithBg,
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
      whithBg={whithBg}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
