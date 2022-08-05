import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import moment from "moment";
import axios from 'axios';
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

    .react-calendar__navigation__label, .react-calendar__navigation__arrow {
      font-size: 2rem;
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
    height: 5rem;
    font-size: 1.6rem;
    color: black;

    &.react-calendar__month-view__days__day--weekend {
      color: red;
    }

    &.react-calendar__month-view__days__day--neighboringMonth {
      color: #757575;
    }
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
  const [data, setData] = useState({});

  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  const diaryDay = [];

  const navigate = useNavigate();

  const clickHandler = (value) => {
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

  useEffect(() => {
    // const getDiary = () => {
    //   axios.get("http://localhost:8000/", {})
    //     .then((res) => {
    //       // console.log(res.data);
    //       res.data.map(v => {
    //         diaryDay.push({
    //           key: v.date,
    //           content: v.content,
    //           emotion: v.emotion,
    //       });
    //       });
    //       console.log(diaryDay);
    //       setData(diaryDay);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    // }
    // getDiary();
  }, []);

  // console.log(data);

  return (
    <Wrapper>
      <Calendar
        onChange={setValue}
        value={value}
        onClickDay={clickHandler}
        tileClassName={({ date, view }) => {
          console.log(diaryDay.find((x) => x.key))
          if (diaryDay.find((x) => x.key === moment(date).format("YYYY. MM. DD"))) {
            return diaryEmotion(date);
          }
        }}
      />
    </Wrapper>
  )
}

export default Main;