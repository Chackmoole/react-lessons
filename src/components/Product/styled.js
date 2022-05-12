import styled from 'styled-components';
import Button from 'common/Button/Button';

export const StyledCard = styled.section`
  padding: 0 36px 40px;
  width: 245px;
  background: linear-gradient(#ffffff 0, #ffffff 80px, #f2f2f2 80px, #f2f2f2 100%);
`;

export const StyledImg = styled.img`
  margin: 0 auto 36px;
  display: block;
`;

export const StyledTitleH2 = styled.h2`
  font-weight: 400;
  font-family: 'Oswald', serif;
  font-size: 20px;
  line-height: 21px;
  text-align: center;
  width: 145px;
  display: block;
  margin: 0 auto 28px;
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 7px;
  border-bottom: 1px solid #cdcdcd;

  &:last-of-type {
    margin-bottom: 32px;
  }
`;

export const StyledProductText = styled.p`
  font-family: 'Arial', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
`;

export const StyledProductButton = styled(Button)`
  margin: 0 auto;
  display: block;
`;
