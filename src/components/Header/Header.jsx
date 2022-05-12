import React from 'react';
import Logo from 'src/components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import { StyledHeader } from 'components/Header/styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
