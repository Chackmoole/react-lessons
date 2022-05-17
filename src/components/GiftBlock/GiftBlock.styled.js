import styled from 'styled-components';
import giftPhoto from 'src/assets/images/giftPhoto.jpg';

export const StyledGiftBlock = styled.div`
  background-image: url(${giftPhoto});
  width: 245px;
  height: 290px;
  padding: 56px 42px 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledGiftBlockDescription = styled.p`
  text-align: center;
  color: white;
`;
