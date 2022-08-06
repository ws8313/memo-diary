import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
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

    button {
      color: black;
    }

    .react-calendar__navigation__label,
    .react-calendar__navigation__arrow {
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  .react-calendar__month-view__weekdays {
    height: 5rem;
    font-size: 1.4rem;
    align-items: center;

    & abbr {
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    height: 5rem;
    font-size: 1rem;
    color: black;

    &.react-calendar__month-view__days__day--weekend {
      color: red;
    }

    &.react-calendar__month-view__days__day--neighboringMonth {
      color: #757575;
    }
  }

  .joy {
    background-color: #e9a03299;
  }

  .happy {
    background-color: #fff25199;
  }

  .heartFluttering {
    background-color: #ff72ba99;
  }

  .gloomy {
    background-color: #c272ff99;
  }

  .sad {
    background-color: #7283ff99;
  }

  .annoying {
    background-color: #5c8f4f99;
  }

  .regret {
    background-color: #56977c99;
  }

  .anger {
    background-color: #e9636399;
  }

  .soso {
    background-color: #a9cd6299;
  }
`;

const Main = () => {
  const [value, setValue] = useState(new Date());

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  const diaryDay = [];

  const navigate = useNavigate();

  const clickHandler = (value) => {
    navigate("/DairyPage", {
      state: `${value.toLocaleString("ko-kr")} . ${weeks[value.getDay()]}`,
    });
  };

  const diaryEmotion = (date) => {
    const keys = moment(date).format("YYYY. MM. DD");
    const values = JSON.parse(localStorage.getItem(keys));
    const emotions = values.emotion;
    if (emotions === "기쁨") {
      return "joy";
    } else if (emotions === "행복") {
      return "happy";
    } else if (emotions === "설렘") {
      return "heartFluttering";
    } else if (emotions === "우울") {
      return "gloomy";
    } else if (emotions === "슬픔") {
      return "sad";
    } else if (emotions === "짜증") {
      return "annoying";
    } else if (emotions === "후회") {
      return "regret";
    } else if (emotions === "분노") {
      return "anger";
    } else {
      return "soso";
    }
  };

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
  }

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Calendar
        onChange={setValue}
        value={value}
        onClickDay={clickHandler}
        tileClassName={({ date, view }) => {
          console.log(diaryDay.find((x) => x.key));
          if (
            diaryDay.find((x) => x.key === moment(date).format("YYYY. MM. DD"))
          ) {
            return diaryEmotion(date);
          }
        }}
      />
    </Wrapper>
  );
};

export default Main;
