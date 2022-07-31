import Header from "../components/Header";
import Main from "../components/Main";
import Login from "../components/Login";

const MainPage = () => {
  const getSetting = JSON.parse(localStorage.getItem("setting"));
  const getLoginState = JSON.parse(sessionStorage.getItem("lockdown"));

  const getLockdown = () => {
    // 설정 한 값이 있을 경우
    if (getSetting) {
      const getLockdownState = getSetting.lockdown;
      console.log("세팅 값이 있음");
      // 잠금모드를 설정한 경우
      if (getLockdownState) {
        // 처음 로그인
        if (getLoginState || getLoginState === null) {
          console.log("최초 로그인 필요", getLoginState);
          return true;
        } else {
          console.log("이미 로그인 상태", getLoginState);
          return getLoginState;
        }
      } else {
        console.log("일반모드", getLockdownState);
        return getLockdownState;
      }
    } else {
      console.log("세팅 값이 없음");
      return false;
    }
  }

  return (
    <>
      {
        getLockdown() ? <Login /> : <></>
      }
      <Header />
      <Main />
    </>
  )
}

export default MainPage;