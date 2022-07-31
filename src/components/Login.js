import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .loginFormContainer {
    position: absolute;
    max-width: 500px;
    margin: 0 auto;
  
    top: 0;
  
    width: 100%;
    height: 640px;
    background-color: white;
  
    z-index: 9;
  }
`;

const Login = () => {
  const lockdown = JSON.parse(sessionStorage.getItem("lockdown"));

  const getLoginState = () => {
    if (lockdown || lockdown === null) {
      console.log(lockdown);
      return true;
    } else {
      console.log("로그인 필요 x", lockdown);
      return false;
    }
  };

  const [showLogin, setShowLogin] = useState(getLoginState());
  const [password, setPassword] = useState("");

  const setting = JSON.parse(localStorage.getItem("setting"));

  const getPassword = setting.password;

  const navigate = useNavigate();

  const ChangeHandler = (e) => {
    setPassword(e.target.value)
  };

  const ClickHandler = () => {
    if (password) {
      if (password === getPassword) {
        sessionStorage.setItem("lockdown", false);
        setShowLogin(false);
      } else {
        alert("비밀번호가 틀렸습니다.")
      }
    } else {
      alert("비밀번호를 입력해주세요.")
    }
  }

  useEffect(() => {
    console.log(setting);
    console.log(password);
    console.log(getPassword);
    console.log("로그인 필요?", showLogin);

    console.log(lockdown);
  }, [setting, password, getPassword, showLogin, lockdown]);

  return (
    <Wrapper>
      {
        showLogin ?
        <div className='loginFormContainer'>
          <div>비밀번호를 입력해주세요</div>
          <form>
            <input
              type='password'
              autoComplete='off'
              onChange={ChangeHandler}
            />
            <button 
              // type='submit'
              onClick={ClickHandler}
            >확인
            </button>
          </form>
        </div> :
        <></>
      }
    </Wrapper>
  )
}

export default Login;