import Header from "../components/Header";
import Main from "../components/Main";
import Login from "../components/Login";

const MainPage = () => {
  const getSetting = JSON.parse(localStorage.getItem("setting"));
  const getLoginState = JSON.parse(sessionStorage.getItem("lockdown"));

  const getLockdown = () => {
    if (getSetting) {
      const getLockdownState = getSetting.lockdown;
      if (getLockdownState) {
        if (getLoginState || getLoginState === null) {
          return true;
        } else {
          return getLoginState;
        }
      } else {
        return getLockdownState;
      }
    } else {
      return false;
    }
  };

  return (
    <>
      {getLockdown() ? <Login /> : <></>}
      <Header />
      <Main />
    </>
  );
};

export default MainPage;
