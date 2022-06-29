import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  text-align: center;

  width: 100%;
  height: 50px;

  border: 1px solid black;

  .year_month {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    width: 6rem;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Header = () => {
  const today = {
    year: new Date().getFullYear(), // 오늘의 연도
    month: new Date().getMonth() + 1, // 오늘의 월, + 1 하는 이유는 월이 0 부터 시작하기 때문
    date: new Date().getDate(), // 오늘의 날짜
    day: new Date().getDay(), // 오늘의 요일
  };

  console.log(today);

  return (
    <Wrapper>
      <div></div>
      <div className="year_month">
        <p>{today.year}년</p>
        <p>{today.month}월</p>
      </div>
    </Wrapper>
  )
}

export default Header;