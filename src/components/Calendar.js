import { useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = {
    year: new Date().getFullYear(), // 오늘의 연도
    month: new Date().getMonth() + 1, // 오늘의 월, + 1 하는 이유는 월이 0 부터 시작하기 때문
    date: new Date().getDate(), // 오늘의 날짜
    day: new Date().getDay(), // 오늘의 요일
  };
  const week = ["일", "월", "화", "수", "목", "금", "토"]; // 일주일

  // console.log(today);

  return (
    <Wrapper>
      <div>Header</div>
      <div>Days</div>
      <div>Cells</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid rgba(128, 128, 128, 0.267);
  
`;

export default Calendar;