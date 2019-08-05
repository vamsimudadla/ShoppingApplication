import styled, { css } from "styled-components";

export const CartImage = styled.img`
  width: 100px;
  height: 130px;
`;

export const ProductQuantity = styled.span`
  color: #777777;
  margin-top: 15px;
  ${props =>
    props.iSMouseHovered &&
    css`
      text-decoration: line-through;
    `}
`;

export const Container = styled.div`
  display: flex;
  margin: 20px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 15px;
`;

export const SizePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductStyle = styled.span`
  color: #777777;
  margin-top: 15px;
  ${props =>
    props.iSMouseHovered &&
    css`
      text-decoration: line-through;
    `}
`;

export const ProductPrice = styled.span`
  margin-right: 20px;
  font-size: 20px;
  color: yellow;
  margin-top: 15px;
  ${props =>
    props.iSMouseHovered &&
    css`
      text-decoration: line-through;
    `}
`;

export const ProductTitle = styled.span`
  color: white;
  font-size: 20px;
  margin-top: 15px;
  ${props =>
    props.iSMouseHovered &&
    css`
      text-decoration: line-through;
    `}
`;

export const CartCrossIcon = styled.span`
  color: white;
  font-size: 20px;
  margin-top: 15px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const CartItemTitleWithCrossIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;
