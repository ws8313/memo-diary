import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 4rem;

  border-bottom: 1px solid black;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .home {
      width: 3rem;
      height: 100%;
      font-size: 1.6rem;
      font-weight: bold;
    }

    .title {
      width: 14rem;
      height: 100%;
      font-size: 1.2rem;
      font-weight: bold;
      
      a {
        text-decoration: none;
        color: black;
        font-size: 2rem;
      }
    }
  }

`;

const Header = () => {
  // const today = {
  //   year: new Date().getFullYear(), // 오늘의 연도
  //   month: new Date().getMonth() + 1, // 오늘의 월, + 1 하는 이유는 월이 0 부터 시작하기 때문
  //   date: new Date().getDate(), // 오늘의 날짜
  //   day: new Date().getDay(), // 오늘의 요일
  // };

  // console.log(today);

  return (
    <Wrapper>
      <header className="header">
        <div className="title">
          <Link to="/">메모 {`&`} 다이어리</Link>
        </div>
      </header>
    </Wrapper>
  )
}

export default Header;