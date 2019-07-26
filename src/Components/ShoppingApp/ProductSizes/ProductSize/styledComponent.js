import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  outline: none;
  text-align: center;
  margin: 3px;
  margin-top: 15px;
  :hover {
    cursor: pointer;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: black;
      color: white;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 250px;
  flex-wrap: wrap;
`;
