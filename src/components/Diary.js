import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: none;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1rem 0;
    padding: 0 0.4rem;
    height: 3rem;
    font-size: 1.2rem;
    border-bottom: 0.4rem double #ff7676;

    .emotion-container {
      flex: 1;

      .emotion {
        border: 0;
        outline: 0;
        font-size: 1rem;
        text-align: center;
        color: black;
      }
    }

    .today {
      flex: 5;
    }

    .save-container {
      flex: 1;

      .save {
        border: 0;
        outline: 0;
        color: black;
        background-color: transparent;
        font-size: 1.6rem;
        cursor: pointer;
      }
    }
  }

  .textarea-Container {
    height: 100vh;
  }

  textarea {
    width: 100%;
    height: 29rem;
    padding: 0 0.4rem;
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1.95rem;
    outline: none;
    resize: none;
    border: none;
    background-image: repeating-linear-gradient(
      white,
      white 1.85rem,
      #ccc 1.85rem,
      #ccc 1.95rem
    );
  }
`;

const Diary = () => {
  const location = useLocation();

  const selectday = location.state.split(". ");
  const selectday_year = selectday[0];
  const selectday_month =
    selectday[1].length === 1 ? `0${selectday[1]}` : selectday[1];
  const selectday_date =
    selectday[2].length === 1 ? `0${selectday[2]}` : selectday[2];
  const selectday_day = selectday[4];
  const title = `${selectday_year}년 ${selectday_month}월 ${selectday_date}일 ${selectday_day}요일`;
  const key = `${selectday_year}. ${selectday_month}. ${selectday_date}`;

  const values = JSON.parse(localStorage.getItem(key));

  const getContent = () => {
    if (values) {
      const contents = values.content;
      return contents;
    } else {
      return "";
    }
  };

  const getEmotion = () => {
    if (values) {
      if (values.content === "") {
        return "기쁨";
      } else {
        const emotions = values.emotion;
        return emotions;
      }
    } else {
      return "기쁨";
    }
  };

  const [content, setContent] = useState(getContent());
  const [emotion, setEmotion] = useState(getEmotion());

  const diaryContent = {
    content: content,
    emotion: emotion,
  };

  const diaryContentString = JSON.stringify(diaryContent);

  const textChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const emotionChangeHandler = (e) => {
    setEmotion(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem(key, diaryContentString);
  }, [key, diaryContentString]);

  return (
    <Wrapper>
      <div className="title">
        <div className="save-container">
          {/* <button className="save" onClick={clickHandler}>
            저장
          </button> */}
        </div>
        <div className="today">{title}</div>
        <div className="emotion-container">
          <select
            className="emotion"
            onChange={emotionChangeHandler}
            defaultValue={emotion}
          >
            <option>기쁨</option>
            <option>행복</option>
            <option>설렘</option>
            <option>슬픔</option>
            <option>우울</option>
            <option>분노</option>
            <option>짜증</option>
            <option>후회</option>
            <option>무난</option>
          </select>
        </div>
      </div>
      <div className="textarea-Container">
        <textarea
          placeholder={`위의 "메뉴 & 다이어리" 클릭하면 달력 화면으로 넘어갑니다.
작성된 일기 내용이 없으면 선택한 감정과 일기 내용은 초기화됩니다.
작성 중인 일기 내용은 자동으로 저장됩니다.`}
          spellCheck="false"
          value={values === null ? undefined : content}
          onChange={textChangeHandler}
        />
      </div>
    </Wrapper>
  );
};

export default Diary;
