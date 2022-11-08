import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: "Roboto";

  input {
    padding: 10px 25px;
    line-height: 130px;
    font-size: 4rem;
    text-align: end;
    font-family: "Roboto";
    width: 100%;
    height: 80px;
    background-color: #f0f0f0;
    border: none;
    border-bottom: 1px solid #dedede;
    color: #0E0E10;
  }
`;

export { InputContainer };
