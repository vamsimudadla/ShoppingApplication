import styled, { css } from "styled-components";

export const CartIconImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const Number = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: yellow;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  ${props =>
    !props.isClicked &&
    css`
      margin-left: 55px;
      margin-top: -20px;
    `}

  ${props =>
    props.isClicked &&
    css`
      margin-left: 20px;
      margin-top: 22px;
    `}
`;
