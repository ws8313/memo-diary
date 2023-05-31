import styled from 'styled-components';
import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '../styles/const';

export const Wrapper = styled.div`
  overflow-y: scroll;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 60px 15px;
  margin-bottom: 61px;
  box-shadow: 0 0 30px rgb(0 0 0 / 0.1);

  @media ${MOBILE_MEDIA_QUERY} {
    margin-bottom: 39px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${contentMaxWidth};
`;