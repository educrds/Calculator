import { ButtonContainer } from "./styles";

const Button = ({label, onClick, primary, flex}) => {
    return (
      <ButtonContainer primary={primary} flex={flex} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  };
  
  export default Button;
  