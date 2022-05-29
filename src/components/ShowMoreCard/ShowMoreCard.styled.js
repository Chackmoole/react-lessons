import styled from 'styled-components';

import Button from 'common/Button/Button';
import IconAdd from 'common/icons/IconAdd';

export const StyledAddCardWrapper = styled.li`
  padding-top: 80px;
  width: 245px;
  min-height: 431px;
`;

export const StyledAddCardInner = styled.div`
  padding: 51px 38px 41px;
  border: 2px solid #f2f2f2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledIconAdd = styled(IconAdd)`
  display: block;
  margin: 0 auto;
  margin-bottom: 48px;
`;

export const StyledProductButtonAdd = styled(Button)`
  background-color: #f2f2f2;
  color: #444444;
`;
