import React from 'react';
import VisuallyHidden from 'common/VisuallyHidden/VisuallyHidden';
import IconVK from 'common/icons/IconVK';
import IconFacebook from 'common/icons/IconFacebook';
import IconInstagram from 'common/icons/IconInstagram';
import { StyledSocialsItem, StyledSocialsList } from './Socials.styled';

const Socials = () => {
  return (
    <section>
      <StyledSocialsList>
        <StyledSocialsItem>
          <a href="https://vk.com">
            <IconVK />
            <VisuallyHidden>vk.com</VisuallyHidden>
          </a>
        </StyledSocialsItem>
        <StyledSocialsItem>
          <a href="https://istagram.com">
            <IconInstagram />
            <VisuallyHidden>istagram.com</VisuallyHidden>
          </a>
        </StyledSocialsItem>
        <StyledSocialsItem>
          <a href="https://facebook.com">
            <IconFacebook />
            <VisuallyHidden>facebook.com</VisuallyHidden>
          </a>
        </StyledSocialsItem>
      </StyledSocialsList>
    </section>
  );
};

export default Socials;
