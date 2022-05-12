import React from 'react';
import { StyledFooter, StyledWrapperFooter } from 'components/Footer/styled';
import HtmlAcademyLink from 'components/HtmlAcademyLink/HtmlAcademyLink';
import FooterLogo from 'common/icons/FooterLogo';
import Socials from 'components/Socials/Socials';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapperFooter>
        <FooterLogo />
        <Socials />
        <HtmlAcademyLink />
      </StyledWrapperFooter>
    </StyledFooter>
  );
};

export default Footer;
