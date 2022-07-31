import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .fontContainer {
    
    .font1 {
      font-family: "Nanum Pen Script";
    }

    .font2 {
      font-family: "Nanum Gothic";
    }
  }
`;

const Setting = () => {
  const getSetting = JSON.parse(localStorage.getItem("setting"));
  
  const getFontFunction = () => {
    if (getSetting) {
      console.log(getSetting.font);
      return getSetting.font;
    } else {
      console.log("나눔 고딕 적용");
      return "Nanum Gothic";
    }
  }

  const getPassword = () => {

  }

  const [lockdown, setLockdown] = useState(false);
  const [password, setPassword] = useState("");
  const [font, setFont] = useState(getFontFunction());

  const navigate = useNavigate();
  const location = useLocation();

  const settings = {
    lockdown: lockdown,
    password: password,
    font: font
  };

  const settingsString = JSON.stringify(settings);


  const LockdownClickHandler = () => {
    if (lockdown === false) {
      setLockdown(true);
    } else {
      setLockdown(false);
      setPassword("");
    };
  };

  const ChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const FontsHandler = (e) => {
    setFont(e.target.value);
  };

  const ClickHandler = () => {
    if (lockdown) {
      if (!password) {
        alert("비밀번호를 입력해주세요.")
      }
    }
    localStorage.setItem("setting", settingsString);
    window.location.replace('/SettingPage');
  };

  useEffect(() => {
    console.log(lockdown);
    console.log(password);
    console.log(font);

    console.log(JSON.parse(localStorage.getItem("setting".font)))

    // localStorage.setItem("setting", settingsString);
  }, [lockdown, password, font]);

  return (
    <Wrapper>
      <div>
        <div>
          <div>
            <span>잠금모드</span>
            <input 
              type="checkbox"
              id='Lockdown'
              onClick={LockdownClickHandler}
            />
          </div>
          <div>
            <span>비밀번호 설정</span>
            <span>
              <input
                type="text"
                disabled={!lockdown}
                onChange={ChangeHandler}
                value={password}
              />
            </span>
          </div>
          <div className='fontContainer'>
            <span>글꼴 변경</span>
            <span>
              <select
                defaultValue={font}
                onChange={FontsHandler}>
                <option className='font1' value="Nanum Pen Script">나눔 손 글씨</option>
                <option className='font2' value="Nanum Gothic">나눔 고딕</option>
              </select>
            </span>
          </div>
          <div>
            <button onClick={ClickHandler}>설정 완료</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Setting;