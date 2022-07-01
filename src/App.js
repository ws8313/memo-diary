import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';

import styled from 'styled-components';
import DiaryPage from './pages/DiaryPage';

const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;

  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 0.4rem;
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
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MainPage />}/>
              <Route path='/DairyPage' element={<DiaryPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
