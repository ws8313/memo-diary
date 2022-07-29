import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const getFont = JSON.parse(localStorage.getItem("setting"));

  const getFontFunction = () => {
    if (getFont) {
      console.log(getFont.font);
      return getFont.font;
    } else {
      console.log("나눔 고딕 적용");
      return "Nanum Gothic";
    }
  }

  const [Lockdown, setLockdown] = useState(false);
  const [password, setPassword] = useState("");
  const [font, setFont] = useState(getFontFunction());

  const settings = {
    password: password,
    font: font
  };

  const settingsString = JSON.stringify(settings);


  const ClickHandler = () => {
    if (Lockdown === false) {
      setLockdown(true);
    } else {
      setLockdown(false);
      setPassword("");
    }
  }

  const ChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const FontsHandler = (e) => {
    setFont(e.target.value)
  }

  // const ClickHandler = () => {
    
  // }

  useEffect(() => {
    console.log(Lockdown);
    console.log(password);
    console.log(font);

    console.log(JSON.parse(localStorage.getItem("setting".font)))

    localStorage.setItem("setting", settingsString);
  }, [Lockdown, password, font]);

  return (
    <Wrapper>
      <div>
        <div>
          <div>
            <span>잠금모드</span>
            <input 
              type="checkbox"
              id='Lockdown'
              onClick={ClickHandler}
            />
          </div>
          <div>
            <span>비밀번호 설정</span>
            <span>
              <input
                type="text"
                disabled={!Lockdown}
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
            <a href='/'>설정 완료</a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Setting;