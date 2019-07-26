import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 90px;
  height: 80px;
  text-align: center;
  background-color: black;

  ${props =>
    props.isClicked &&
    css`
      right: 600px;
    `}

  ${props =>
    !props.isClicked &&
    css`
      right: 0px;
      :hover {
        cursor: pointer;
      }
    `}
`;

export const CrossIcon = styled.span`
  height: 80px;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
