import styled from "styled-components";

const ButtonContainer = styled.button`
  border: none;
  background-color: ${(props) => (props.primary ? "##BFBFC1" : "#2F2D39")};
  color: ${(props) => (props.primary ? "#0E0E10" : "#E8E7EE")};
  font-size: 24px;
  height: 90px;
  width: 90px;
  flex: ${(props) => (props.flex ? "3" : "1")};

  &:hover {
    opacity: 0.8;
  }
`;

export { ButtonContainer };
