import styled, { css } from "styled-components";

export const CartItemsContainer = styled.div`
  height: 450px;
  ${props =>
    props.length > 3 &&
    css`
      overflow-y: scroll;
    `}
`;

export const CartEmptyMsg = styled.span`
  color: yellowgreen;
  font-size: 25px;
  margin-left: 150px;
  margin-top: 150px;
`;
