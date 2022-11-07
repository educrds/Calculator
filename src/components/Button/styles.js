import styled from "styled-components";
import Button from ".";

const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #cacaca;
  background-color: #ffff00;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:hover{
    opacity: 0.6;
  }
`;

export { ButtonContainer };
