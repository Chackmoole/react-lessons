import styled from 'styled-components';
import TitleH1 from 'common/TitleH1/TitleH1';

export const StyledCatalog = styled.section`
  margin: 0 auto 75px;
  padding: 0 30px;
  max-width: 1280px;
`;

export const StyledWrapper = styled.ul`
  display: flex;
  gap: 62px 80px;
  flex-wrap: wrap;
  width: 1280px;
`;

export const StyledTitle = styled(TitleH1)`
  margin-bottom: 84px;
`;
