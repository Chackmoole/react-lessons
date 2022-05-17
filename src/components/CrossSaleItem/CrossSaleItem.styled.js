import styled from 'styled-components';
import { StyledTitleH3 } from 'common/TitleH3/styled';
import { StyledButton } from 'common/Button/styled';

export const StyledCrossSaleItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #cdcdcd;
  width: 895px;

  &:first-child {
    border-top: 1px solid #cdcdcd;
  }
`;

export const StyledCrossSaleTitle = styled(StyledTitleH3)`
  margin: 0;
  width: 325px;
  text-align: left;
  text-transform: uppercase;
`;

export const StyledCrossSaleWeight = styled.p`
  width: 244px;
`;

export const StyledCrossSalePrice = styled.p`
  width: 60px;
  margin-right: 20px;
`;

export const StyledCrossSaleButton = styled(StyledButton)`
  width: 244px;
`;
