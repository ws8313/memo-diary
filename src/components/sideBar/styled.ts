import styled, { keyframes } from 'styled-components';
import { contentMaxWidth } from '../../styles/const';

const Menu_fadeOut = keyframes`
0% {
  transform: translateX(0);
}
99% {
  transform: translateX(0);
} 100%{
  transform: translateX(-100%);
}
`;

const Menu_fadeIn = keyframes`
0% {
  transform: translateX(-100%);
}
1% {
  transform: translateX(0);
} 100%{
  transform: translateX(0);
}
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 10;

  transform: translateX(-100%);
  animation: ${Menu_fadeOut} 0.5s ease forwards;

  &.open {
    transform: translateX(0);
    animation: ${Menu_fadeIn} 0.5s ease forwards;
  }
`;

export const SideBarOutside = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  transition: opacity 0.5s ease;
  content: '';

  &.open {
    opacity: 1;
  }
`;

export const SideBarContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const SideBarWrap = styled.div`
  overflow: hidden;
  max-width: ${contentMaxWidth};
  height: 100%;
  margin: 0 auto;
`;

export const SideBarList = styled.ul`
  position: relative;
  max-width: 300px;
  height: 100%;
  background-color: white;
  transition: 0.5s ease;
  transform: translateX(-100%);
  list-style: none;

  &.open {
    transform: translateX(0);
  }
`;

export const Menu = styled.li`
  margin: 30px 8px;
`;
