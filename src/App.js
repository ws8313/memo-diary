import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DiaryPage from "./pages/DiaryPage";
import SettingPage from "./pages/SettingPage";

import styled from "styled-components";

const getSetting = JSON.parse(localStorage.getItem("setting"));

const getFontFunction = () => {
  if (getSetting) {
    const getFont = getSetting.font;
    return getFont;
  } else {
    return "Nanum Gothic";
  }
};

const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;

  *,
  body {
    font-family: ${getFontFunction()}, "Nanum Gothic", -apple-system,
      BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/DairyPage" element={<DiaryPage />} />
              <Route path="/SettingPage" element={<SettingPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
