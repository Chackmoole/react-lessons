import styled from 'styled-components';

import Button from 'common/Button/Button';
import IconAdd from 'common/icons/IconAdd';
import TitleH2 from 'common/TitleH2/TitleH2';

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

export const StyledShowMoreTitle = styled(TitleH2)`
  margin-bottom: 24px;
`;

export const StyledCardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #444444;
`;

export const StyledProductButtonAdd = styled(Button)`
  background-color: #f2f2f2;
  color: #444444;
`;
