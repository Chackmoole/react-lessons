import styled from 'styled-components';
import Text from 'common/Text/Text';

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

export const StyledTitle = styled(Text)`
  width: 325px;
  text-transform: uppercase;
`;

export const StyledCrossSalePrice = styled.p`
  width: 60px;
  margin-right: 30px;
`;
