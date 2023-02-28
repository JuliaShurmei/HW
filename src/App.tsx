import styled from "styled-components";

import "./App.css";
import * as themeConf from './ThemeManager/theme';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './ThemeManager';
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/about/about";
import { Posts } from "./components/posts/posts";
import { NotFound } from "./components/notFound/notFound";
import { SinglePost } from "./components/singlePost/singlePost";
import { LoginWrapper } from "./components/login/loginWrapper";
import { SignUpWrapper } from "./components/signUp/signUpWrapper";


const Body = styled.div`
background-color: ${themeConf.backgroundColor};
color: ${themeConf.textColor};
transition: all .5s ease;
height: "100%";
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
    <ThemeProvider theme={{ mode: theme.mode }} >
      <Body>
      <Header />
    
      <Routes>
        <Route path="/" element={<LoginWrapper  />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUpWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/posts/:myId" element={<SinglePost />} />
      </Routes>
    
      <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
              
         
     
      </Body>
    </ThemeProvider>
  );
}
export default App;