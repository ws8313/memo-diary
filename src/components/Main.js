import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Calendar from "react-calendar";
import moment from "moment";
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

  .diaryDay {
    background-color: #ccc;
  }

`;

const Main = () => {
  const [value, setValue] = useState(new Date());

  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  const diaryDay = [];

  const navigate = useNavigate();
  useEffect(() => {
  }, [value])

  const ChangeHandler = (nextValue) => {
    setValue(nextValue);
  }

  const ClickHandler = (value, event) => {
    setValue(value);

    navigate('/DairyPage', { state: `${value.toLocaleString("ko-kr")} . ${weeks[value.getDay()]}` });
  }
  
  for (let i = 0; i < localStorage.length; i++) {
    const keys = localStorage.key(i);
    const values = JSON.parse(localStorage.getItem(keys));
    if (values !== null && values !== "") {
      diaryDay.push(keys);
    }
  };

  return (
    <Wrapper>
      <Calendar
        onChange={ChangeHandler}
        value={value}
        onClickDay={ClickHandler}
        tileClassName={({ date, view }) => {
          // console.log(moment(date).format("YYYY. MM. DD"))
          if (diaryDay.find((x) => x === moment(date).format("YYYY. MM. DD"))) {
            return "diaryDay";
          }
        }}
        // formatDay={(locale, date) =>
        //   date.toLocaleString("en", { day: "numeric" })
        // }
        // formatShortWeekday={(locale, date) =>
        //   date.toLocaleString("en", { weekday: "short" })
        // }
      />
    </Wrapper>
  )
}

export default Main;