import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: none;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;

    font-size: 1.6rem;
    border-bottom: 0.4rem double #ff7676;
  }

  textarea {
    width: 100%;
    height: 25rem;

    font-size: 1.5rem;
    line-height: 1.85rem;
    outline: none;

    resize: none;
    border: none;

    /* background-attachment: local; */
    background-image:
      repeating-linear-gradient(white, white 1.8rem, #ccc 1.8rem, #ccc 1.85rem);
  }
`;

const Diary = () => {
  const location = useLocation();
  const today = location.state.split('. ');
  const today_year = today[0];
  const today_month = today[1];
  const today_date = today[2];
  const today_day = today[4];

  useEffect(() => {
    console.log(location.state);
    console.log(today);
  }, [])
  return (
    <Wrapper>
        <div className="title">
          {today_year}년 {today_month}월 {today_date}일 {today_day}요일
        </div>
        <div>
          <textarea 
            placeholder='내용을 입력해 주세요'
          />
        </div>
    </Wrapper>
  )
}

export default Diary;