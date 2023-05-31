import styled from 'styled-components';
import { contentMaxWidth } from '../../styles/const';

export const Wrapper = styled.header`
  width: 100%;
`;

export const Header = styled.nav`
  display: flex;
  margin: 0 auto;
  padding: 0 10px;
  background: white;
  height: 50px;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  max-width: ${contentMaxWidth};
  font-family: GmarketSansBold;
`;

export const Menu = styled.div`
  .icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
