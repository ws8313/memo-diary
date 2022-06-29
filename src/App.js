import Main from './components/Main'

import styled from 'styled-components';
import Header from './components/Header';

const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;

  .container {
    max-width: 500px;
    margin: 0 auto;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppContainer>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
