import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    appearance: none;
  }
  html {
    font-family: 'GmarketSansMedium';
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    font-size: 14px;

    a {
      text-decoration: none;
    }
  }

  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
