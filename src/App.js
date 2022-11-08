import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [firstNumber, setfirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber(
      (prevValue) => `${prevValue === "0" ? "" : prevValue}${number}`
    );
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setfirstNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setfirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
      console.log(currentNumber);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      console.log(currentNumber);
    }
  };
  const handleRemNumbers = () => {
    if (firstNumber === "0") {
      setfirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation("");
      setfirstNumber("0");
    }
  };
  const handleMulNumbers = () => {
    if (firstNumber === "0") {
      setfirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mul = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mul));
      setOperation("");
      setfirstNumber("0");
    }
  };
  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setfirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation("");
      setfirstNumber("0");
    }
  };
  const handlePercentage = () => {
    const per = String(currentNumber) / 100;
    setCurrentNumber(String(per));
    setOperation("");
    setfirstNumber("0");
  };
  const handleSquare = () => {
    const sqr = String(Math.sqrt(currentNumber));
    setCurrentNumber(String(sqr));
    setOperation("");
    setfirstNumber("0");
  };
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleRemNumbers();
          break;
        case "*":
          handleMulNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button primary label="AC" onClick={handleOnClear} />
          <Button primary label="√" onClick={handleSquare} />
          <Button primary label="%" onClick={handlePercentage} />
          <Button primary label="÷" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button primary label="x" onClick={handleMulNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button primary label="-" onClick={handleRemNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button primary label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="0" flex onClick={() => handleAddNumber("0")} />
          <Button primary label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
