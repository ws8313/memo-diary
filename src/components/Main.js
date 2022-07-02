import { useState } from "react";
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
  line-height: 1.125em;
  }

  .react-calendar__navigation {
    height: 5rem;
    margin-bottom: 0;

    .react-calendar__navigation__label, .react-calendar__navigation__arrow {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  .react-calendar__month-view__weekdays {
    height: 5rem;
    font-size: 1.8rem;
    align-items: center;

    & abbr {
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    height: 5.3rem;
    font-size: 1.6rem;
  }

  .best {
    background-color: #64c96499;
  }

  .good {
    background-color: #9dd77299;
  }

  .normal {
    background-color: #fdce1799;
  }

  .bad {
    background-color: #fd844699;
  }

  .worst {
    background-color: #fd565f99;
  }
`;

const Main = () => {
  const [value, setValue] = useState(new Date());

  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  const diaryDay = [];

  const navigate = useNavigate();

  const ClickHandler = (value) => {
    navigate('/DairyPage', { state: `${value.toLocaleString("ko-kr")} . ${weeks[value.getDay()]}` });
  }

  const diaryEmotion = (date) => {
    const keys = moment(date).format("YYYY. MM. DD");
    const values = JSON.parse(localStorage.getItem(keys));
    const emotions = values.emotion;
    if (emotions === "최고") {
      return "best";
    } else if (emotions === "좋음") {
      return "good";
    } else if (emotions === "보통") {
      return "normal";
    } else if (emotions === "나쁨") {
      return "bad";
    } else {
      return "worst";
    }
  }
  
  for (let i = 0; i < localStorage.length; i++) {
    const keys = localStorage.key(i);
    const values = JSON.parse(localStorage.getItem(keys));
    const contents = values.content;
    const emotions = values.emotion;
    if (contents !== null && contents !== "") {
      diaryDay.push({
        key: keys,
        content: contents,
        emotion: emotions,
      });
    }
  };

  return (
    <Wrapper>
      <Calendar
        onChange={setValue}
        value={value}
        onClickDay={ClickHandler}
        tileClassName={({ date, view }) => {
          if (diaryDay.find((x) => x.key === moment(date).format("YYYY. MM. DD"))) {
            return diaryEmotion(date);
          }
        }}
      />
    </Wrapper>
  )
}

export default Main;