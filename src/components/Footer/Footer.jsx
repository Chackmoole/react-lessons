import React from 'react';
import { StyledFooter, StyledWrapperFooter } from 'components/Footer/Footer.styled';
import HtmlAcademyLink from 'components/HtmlAcademyLink/HtmlAcademyLink';
import FooterLogo from 'common/icons/FooterLogo';
import Socials from 'components/Socials/Socials';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapperFooter>
        <a href="replaceMe">
          <FooterLogo />
        </a>
        <Socials />
        <HtmlAcademyLink />
      </StyledWrapperFooter>
    </StyledFooter>
  );
};

export default Footer;
