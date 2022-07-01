import { useEffect, useState } from 'react';
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
    padding: 0 0.4rem;
    box-sizing: border-box;

    font-size: 1.5rem;
    line-height: 1.95rem;
    outline: none;

    resize: none;
    border: none;

    /* background-attachment: local; */
    background-image:
      repeating-linear-gradient(white, white 1.85rem, #ccc 1.85rem, #ccc 1.95rem);
  }
`;

const Diary = () => {
  const location = useLocation();
  
  const selectday = location.state.split('. ');
  const selectday_year = selectday[0];
  const selectday_month = (selectday[1].length === 1) ? `0${selectday[1]}` : selectday[1];
  const selectday_date = (selectday[2].length === 1) ? `0${selectday[2]}` : selectday[2];;
  const selectday_day = selectday[4];
  const title = `${selectday_year}년 ${selectday_month}월 ${selectday_date}일 ${selectday_day}요일`;
  const key = `${selectday_year}. ${selectday_month}. ${selectday_date}`
  
  const [content, setContent] = useState(JSON.parse(localStorage.getItem(key)));

  const ChangeHandler = (e) => {
    setContent(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(content));
  }, [content, key, title])

  return (
    <Wrapper>
        <div className="title">
          {title}
        </div>
        <div>
          <textarea 
            placeholder='내용을 입력해 주세요'
            spellCheck="false"
            value={content === null ? undefined : content}
            onChange={ChangeHandler}
          />
        </div>
    </Wrapper>
  )
}

export default Diary;