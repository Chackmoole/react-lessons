import styled, { css } from 'styled-components';

const LINK_COLOR = '#111111';

export const StyledNavLink = styled.a`
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${LINK_COLOR};

  &:not(:last-of-type) {
    margin-right: 36px;
  }

  ${(props) => {
    if (props.isActive) {
      return css`
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 0;
          left: 0;
          height: 2px;
          background-color: #68b738;
        }
      `;
    }
    return null;
  }}
`;
