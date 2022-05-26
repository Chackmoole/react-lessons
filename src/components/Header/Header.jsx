import React from 'react';
import Logo from 'src/components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import { StyledHeader } from 'components/Header/Header.styled';
import FooterLogo from 'common/icons/FooterLogo';

const Header = () => {
  return (
    <StyledHeader>
      <a href="replaceMe">
        <Logo />
      </a>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
