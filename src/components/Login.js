import { useEffect, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .loginContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 500px;
    margin: 0 auto;
    top: 0;
    width: 100%;
    height: 640px;
    background-color: white;
    z-index: 9;

    .loginFormContainer {
      width: 20rem;
      height: 25rem;

      .loginTitle {
        display: flex;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: bold;
      }

      .loginForm {
        display: flex;
        justify-content: center;
        margin-top: 4rem;

        .loginInput {
          width: 15rem;
          height: 1.5rem;
        }

        .loginButton {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

const Login = () => {
  const lockdown = JSON.parse(sessionStorage.getItem("lockdown"));

  const getLoginState = () => {
    if (lockdown || lockdown === null) {
      return true;
    } else {
      return false;
    }
  };

  const [showLogin, setShowLogin] = useState(getLoginState());
  const [password, setPassword] = useState("");

  const setting = JSON.parse(localStorage.getItem("setting"));

  const getPassword = setting.password;

  const ChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const ClickHandler = () => {
    if (password) {
      if (password === getPassword) {
        sessionStorage.setItem("lockdown", false);
        setShowLogin(false);
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("비밀번호를 입력해주세요.");
    }
  };

  useEffect(() => {}, [setting, password, getPassword, showLogin, lockdown]);

  return (
    <Wrapper>
      {showLogin ? (
        <div className="loginContainer">
          <div className="loginFormContainer">
            <div className="loginTitle">
              <div>비밀번호를 입력해주세요</div>
            </div>
            <form className="loginForm">
              <input
                type="password"
                className="loginInput"
                autoComplete="off"
                onChange={ChangeHandler}
              />
              <button className="loginButton" onClick={ClickHandler}>
                확인
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Login;
