import React from 'react';
import HtmlAcademyLogo from 'src/common/icons/HtmlAcademyLogo';
import { StyledHtmlAcademyDescription, StyledHtmlAcademyLink } from './styled';

const HtmlAcademyLink = () => {
  return (
    <StyledHtmlAcademyLink href="https://htmlacademy.ru">
      <StyledHtmlAcademyDescription>HTML Academy</StyledHtmlAcademyDescription>
      <HtmlAcademyLogo />
    </StyledHtmlAcademyLink>
  );
};

export default HtmlAcademyLink;
