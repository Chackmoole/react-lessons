import React from 'react';
import HtmlAcademyLogo from 'src/common/icons/HtmlAcademyLogo';
import { StyledHtmlAcademyLink } from './HtmlAcademyLink.styled';
import Text from 'common/Text/Text';

const HtmlAcademyLink = () => {
  return (
    <StyledHtmlAcademyLink href="https://htmlacademy.ru">
      <Text mr="24px" color="lightGray" variant="body1">
        HTML Academy
      </Text>
      <HtmlAcademyLogo />
    </StyledHtmlAcademyLink>
  );
};

export default HtmlAcademyLink;
