import styled, { css } from "styled-components";

export const CartItemsCard = styled.div`
  position: fixed;
  right: 0px;
  width: 600px;
  height: 100vh;
  background-color: #1a1a1a;
  ${props =>
    !props.isClicked &&
    css`
      display: none;
    `}
`;
export const CartImage = styled.div`
  width: 600px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartName = styled.span`
  position: absolute;
  color: white;
  margin-left: 65px;
  margin-top: 10px;
  font-size: 25px;
`;
