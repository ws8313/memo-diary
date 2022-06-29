import { useState } from "react";
import Calendar from "react-calendar";
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
  height: 400px;
  border: 1px solid rgba(128, 128, 128, 0.267);
  
`;

export default Main;