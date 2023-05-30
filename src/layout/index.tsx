import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/header';
import * as S from './styled';
import './style.scss';

const Layout = () => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.ContentWrapper>
        <Header />
        <S.Content>
          <Outlet />
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Layout;
