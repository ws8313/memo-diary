import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .settingContainer {
    /* display: flex; */
    width: 100%;
    height: 29rem;
    padding: 0 0.8rem;
    box-sizing: border-box;

    font-size: 1.2rem;
    line-height: 2.25rem;
    outline: none;

    resize: none;
    border: none;

    background-image:
      repeating-linear-gradient(white, white 2.2rem, #ccc 2.2rem, #ccc 2.25rem);
    
    div {
      display: flex;
      align-items: center;
      vertical-align: middle;
      /* margin-top: 1.4rem; */
    }

    span {
      /* font-size: 1.2rem; */
      font-weight: bold;
      margin-left: 1rem;
    }

    input {
      background-color: white;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #878787;
      border-radius: 4px;
      padding: 0 10px;
      font-size: 1rem;
      color: #3c3c3c;
      vertical-align: middle;
    }

    select {
      background-color: white;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #878787;
      border-radius: 4px;
      padding: 0 10px;
      font-size: 1rem;
      color: #3c3c3c;
      vertical-align: middle;
    }
  }

  .settingButton {
    position: fixed;
    z-index: 10;
    right: 16rem;
    bottom: 11rem;

    button {
      box-sizing: border-box;
      border: 1px solid black;
      padding: 15px 20px;
      border-radius: 25px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      background-color: white;
      color: black;
      cursor: pointer;
      transition: .25s ease-in-out;

      :hover {
        background-color: black;
        color: white;
      }
    }
  }

  .fontContainer {
    .font1 {
      font-family: "Nanum Pen Script";
    }

    .font2 {
      font-family: "Nanum Gothic";
    }
  }
  
  .lockdown {
    display: none;
  }

  .labelContainer {
    position: relative;
  }
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: -12px;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
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

  const getLockdownFunction = () => {
    if (getSetting) {
      console.log(getSetting.lockdown);
      return getSetting.lockdown;
    } else {
      console.log("잠금모드 설정 x");
      return false;
    }
  }

  const [lockdown, setLockdown] = useState(getLockdownFunction());
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

    console.log(JSON.parse(localStorage.getItem("setting")));

    // localStorage.setItem("setting", settingsString);
  }, [lockdown, password, font]);

  return (
    <Wrapper>
      <div className='settingContainer'>
        <div>
          <span>잠금모드</span>
          <span className='labelContainer'>
            <CheckBox 
              type="checkbox"
              id='Lockdown'
              className='lockdown'
              checked={lockdown}
              onClick={LockdownClickHandler}
            />
            <CheckBoxLabel for='Lockdown' className='check_toggle'>
            </CheckBoxLabel>
          </span>
        </div>
        <div>
          <span>비밀번호</span>
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
          <span>글꼴변경</span>
          <span>
            <select
              defaultValue={font}
              onChange={FontsHandler}>
              <option className='font1' value="Nanum Pen Script">나눔 손 글씨</option>
              <option className='font2' value="Nanum Gothic">나눔 고딕</option>
            </select>
          </span>
        </div>
        <div className='settingButton'>
          <span>
            <button onClick={ClickHandler}>저장</button>
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Setting;