import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  width: 250px;
  height: 45px;
  margin: 20px;
  border: none;
  background-color: black;
  color: aliceblue;
  font-size: 18px;
`;

export const Container = styled.div`
  width: 300px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }
  :hover ${Button} {
    background-color: yellowgreen;
    cursor: pointer;
  }
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 450px;
`;

export const ProductTitle = styled.span`
  margin: 20px;
  font-size: larger;
  text-align: center;
`;

export const ProductInstallments = styled.span`
  color: #777777;
`;

export const FreeShippingText = styled.span`
  position: absolute;
  margin-top: -300px;
  margin-left: 100px;
  width: 80px;
  height: 20px;
  color: white;
  background-color: black;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
