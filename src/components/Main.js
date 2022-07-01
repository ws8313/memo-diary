import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .react-calendar {
  width: 100%;
  background: white;
  border: none;
  font-family: 'Nanum Pen Script', Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  }

  .react-calendar__navigation {
    height: 4rem;

    .react-calendar__navigation__label {
      font-family: 'Nanum Pen Script', Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  .react-calendar__month-view__weekdays {
    height: 4rem;
    font-size: 1.6rem;
    align-items: center;

    & abbr {
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    font-family: 'Nanum Pen Script', Arial, Helvetica, sans-serif;
    height: 4rem;
    font-size: 1.4rem;
  }
`;

const Main = () => {
  const [value, setValue] = useState(new Date());

  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  
  const year = value.getFullYear();
  const month = value.getMonth();
  const date = value.getDate();
  const day = weeks[value.getDay()];

  const navigate = useNavigate();

  useEffect(() => {
    console.log(weeks[value.getDay()]);
    console.log(value.toLocaleString("ko-kr"));
  }, [value])

  const ChangeHandler = (nextValue, event) => {
    setValue(nextValue);
  }

  const ClickHandler = (value, event) => {
    setValue(value);
    
    navigate('/DairyPage', { state: `${value.toLocaleString("ko-kr")} . ${weeks[value.getDay()]}` });
  }
  

  return (
    <Wrapper>
      <Calendar 
        onChange={ChangeHandler}
        value={value}
        onClickDay={ClickHandler}
        // formatDay={(locale, date) =>
        //   date.toLocaleString("en", { day: "numeric" })
        // }
        // formatShortWeekday={(locale, date) =>
        //   date.toLocaleString("en", { weekday: "short" })
        // }
      />
      {/* { value.toString() === undefined ? <div> 선택한 날짜: 없음 </div> : <div> 선택한 날짜: {value.toString()}</div> } */}
    </Wrapper>
  )
}

export default Main;