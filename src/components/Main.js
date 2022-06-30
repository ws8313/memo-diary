import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import styled from "styled-components";

const Main = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Wrapper>
      <Calendar 
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-top: none;

  .react-calendar {
  width: 100%;
  background: white;
  /* border: 1px solid black; */
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

export default Main;