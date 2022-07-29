// import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  
  .header {
    width: 100%;
    padding: 0 0.4rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 5rem;

    border-bottom: 2px solid black;

    .menu, .end-header {
      flex: 1;
      font-size: 1.5rem;
    }

    .title {
      flex: 5;
      font-size: 2rem;
    }

    a, button {
      text-decoration: none;
      border: 0;
      outline: 0;
      color: black;
      background-color: transparent;
      /* font-size: 1.5rem; */
      font-weight: bold;
      cursor: pointer;
    }
  }

  li {
    list-style: none;
  }

  .show-menu {
    /* width: 100%; */
    height: 100%;
    position: absolute;
    left: 0px;
    transition: 1s;
    z-index: 9;
  }

  .hide-menu{
    /* width: 100%; */
    height: 100%;
    position: absolute;
    left: -100%;
    transition: 1s;
    z-index: 9;
  }
  
  /* .toggle-menu {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 9;
    transform: translateX(-100%);
    transition: 850ms;
  }

  .toggle-menu.active {
    left: 0;
    transform: translateX(0);
    transition: 850ms;
  } */

  /* .toggle-menu-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  } */

  /* .toggle-menu-list-container {
    overflow: hidden;
    max-width: 500px;
    height: 100%;
    margin: 0 auto;
  } */

  /* .toggle-menu-ul {
    transform: translateX(0);
    position: relative;
    max-width: 300px;
    height: 100%;
    transition: .5s ease;
    background-color: #fff;
  } */
`;

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <header className="header">
        <div className="menu">
          {/* <button
            // href={() => false}
            onClick={() => {setMenuOpen(menuOpen => !menuOpen)}}
          >메뉴</button> */}
        </div>
        <div className="title">
          <a href="/">메모 {`&`} 다이어리</a>
        </div>
        <div className="end-header">
          <Link to="/SettingPage">설정</Link>
        </div>
      </header>
      {/* <ul className={menuOpen ? "show-menu" : "hide-menu"}>
        <li>메모</li>
        <li>일기</li>
        <li>달력</li>
      </ul> */}
      {/* <div className={menuOpen ? "toggle-menu active" : "toggle-menu"}>
        <div className="toggle-menu-container">
          <div className="toggle-menu-list-container">
            <ul className="toggle-menu-ul">
              <li>메모</li>
              <li>일기</li>
              <li>달력</li>
            </ul>
          </div>
        </div>
      </div> */}
    </Wrapper>
  )
}

export default Header;