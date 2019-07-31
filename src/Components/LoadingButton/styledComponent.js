import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 4px solid white;
  border-radius: 50%;
  border-top: 4px solid green;
  width: 15px;
  height: 15px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  margin-top: 42px;
  margin-left: 60px;
`;
