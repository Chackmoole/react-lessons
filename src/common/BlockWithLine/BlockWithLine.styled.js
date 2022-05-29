import styled from 'styled-components';

export const StyledBlockWithLine = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 24px;
    height: 2px;
    background-color: #68b738;
    z-index: -1;
  }
`;
