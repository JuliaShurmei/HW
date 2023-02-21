import styled from "styled-components";
import { Login } from "./components/login/Login";
import "./App.css";
import { SignUp } from "./components/signUp/signUp";
import * as themeConf from './ThemeManager/theme';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './ThemeManager';

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
const Wrapper = styled.div`
background-color: ${themeConf.backgroundColor};
color: ${themeConf.textColor};
text-align: center;
transition: all .5s ease;
`;

const Button = styled.button`
background: ${themeConf.buttonBackgroundColor};
border: none;
border-radius: 0.3em;
box-shadow: none;
color: ${themeConf.buttonTextColor};
cursor: pointer;
font-size: 1em;
padding: 0.5em 1em;
transition: all .5s ease;
`;

function App () {
  const theme = useTheme();

   return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>
          <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
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
      </Wrapper>
    </ThemeProvider>
  );
}
export default App;