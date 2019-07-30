import styled from "styled-components";

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const DropDownBlock = styled.div`
  margin-right: 100px;
`;

export const DropDown = styled.select`
  width: 150px;
  height: 35px;
  border-radius: 7px;
  outline: none;
  background-color: white;
`;

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
