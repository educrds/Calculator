import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;
    display: flex;
    align-items: center;
    justify-content: center; 
`

const Content = styled.div`
    background-color: #fefefe;
    width: 50%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export {Container, Content, Row}
