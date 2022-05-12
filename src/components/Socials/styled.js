import styled from 'styled-components';

export const StyledSocialsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StyledSocialsItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 28px;
  }
`;
