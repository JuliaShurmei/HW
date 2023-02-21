import styled from "styled-components";
import { Login } from "./components/login/Login";
import "./App.css";
import { SignUp } from "./components/signUp/signUp";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 0 1 65%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    display: none;
  }
`;

function App() {
  return (
    <>
      <LoginContainer>
        <Login />
        <ImageContainer>
          <img src='./../background.png' />
        </ImageContainer>
      </LoginContainer>
      <SignUpContainer>
        <SignUp />
        <ImageContainer>
          <img src='./../background.png' />
        </ImageContainer>
      </SignUpContainer>
    </>
  );
}

export default App;
