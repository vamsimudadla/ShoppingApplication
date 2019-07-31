import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 1300px;
  :hover {
    cursor: pointer;
  }
`;
