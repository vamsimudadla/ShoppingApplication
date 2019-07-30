import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  width: 200px;
  height: 30px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid #f5f5f5;
  :focus {
    border-bottom: 1px solid green;
  }
`;

export const AuthenticationButton = styled.button`
  outline: none;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: green;
  color: white;
  border: none;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 20px;
`;

export const Container = styled.div`
  height: 100vh;
  background-color: #004d66;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AuthenticationLink = styled.span`
  color: green;
  border-bottom: 1px solid green;
  :hover {
    cursor: pointer;
  }
  font-size: 12px;
`;

export const LoginLinkText = styled.span`
  font-size: 12px;
`;

export const Wrapper1 = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const WarningText = styled.span`
  position: absolute;
  font-size: 12px;
  color: red;
  margin-top: 120px;
`;
