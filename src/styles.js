import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cbcbcb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  box-shadow: 0px 0px 20px 0px #aaa;
  width: 350px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export { Container, Content, Row };
