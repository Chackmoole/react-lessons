import React from 'react';
import { StyledNavLink } from 'components/Nav/Nav.styled';

const Nav = () => {
  return (
    <nav>
      <StyledNavLink href="#">главная</StyledNavLink>
      <StyledNavLink isActive href="#">
        Каталог продукции
      </StyledNavLink>
      <StyledNavLink href="#">подбор программы</StyledNavLink>
    </nav>
  );
};

export default Nav;
