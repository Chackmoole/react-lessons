import styled, { css } from 'styled-components';

export const StyledText = styled.p`
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  color: #000000;

  ${(props) => {
    switch (props.variant) {
      case 'h1':
        return css`
          font-family: 'Oswald', sans-serif;
          font-size: 60px;
          line-height: 60px;
        `;
      case 'h2':
        return css`
          font-family: 'Oswald', sans-serif;
          font-size: 36px;
          line-height: 36px;
        `;
      case 'h3':
        return css`
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          line-height: 20px;
          text-transform: uppercase;
        `;
      case 'body1':
        return css`
          font-size: 16px;
          line-height: 20px;
        `;
    }
    return '';
  }}

  ${(props) => {
    switch (props.color) {
      case 'black':
        return css`
          color: #000000;
        `;
      case 'wite':
        return css`
          color: #ffffff;
        `;
      case 'lightGray':
        return css`
          color: #444444;
        `;
      case 'gray':
        return css`
          color: #222222;
        `;
    }
  }}




  ${(props) => {
    if (props.textCenter) {
      return css`
        text-align: center;
      `;
    }
  }}

  ${(props) => {
    if (props.m) {
      return css`
        margin: ${props.m};
      `;
    }

    if (props.mx) {
      return css`
        margin-left: ${props.mx};
        margin-right: ${props.mx};
      `;
    }

    if (props.my) {
      return css`
        margin-top: ${props.my};
        margin-bottom: ${props.my};
      `;
    }

    if (props.mt) {
      return css`
        margin-top: ${props.mt};
      `;
    }

    if (props.mr) {
      return css`
        margin-right: ${props.mr};
      `;
    }

    if (props.mb) {
      return css`
        margin-bottom: ${props.mb};
      `;
    }

    if (props.ml) {
      return css`
        margin-left: ${props.ml};
      `;
    }
  }}

  ${(props) => {
    if (props.width) {
      return css`
        width: ${props.width};
      `;
    }
  }}

  ${(props) => {
    if (props.withBg) {
      return css`
        background-color: #ffffff;
        padding-left: 40px;
        padding-right: 36px;
        margin-left: -40px;
        display: inline-block;
      `;
    }
  }}
`;
