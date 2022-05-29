import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background-color: #68b738;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: white;
  border: none;
  min-width: 168px;
  text-transform: uppercase;

  ${(props) => {
    if (props.width) {
      return css`
        width: ${props.width};
      `;
    }
  }}

  ${(props) => {
    if (props.height) {
      return css`
        min-height: ${props.height};
      `;
    }
  }}

  $
`;
