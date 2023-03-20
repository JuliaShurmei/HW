import styled from "styled-components";

import "./App.css";
import * as themeConf from './ThemeManager/theme';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './ThemeManager';
import { Header } from "./components/header/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./components/about/about";
import { Posts } from "./components/posts/posts";
import { NotFound } from "./components/notFound/notFound";
import { SinglePost } from "./components/singlePost/singlePost";
import { LoginWrapper } from "./components/login/loginWrapper";
import { SignUpWrapper } from "./components/signUp/signUpWrapper";
import { Home } from "./components/home/home";
import { EditPost } from "./components/editPost/editPost";
import { AuthProvider } from "./authContext/authProvider";
import { CheckAuth } from "./authContext/checkAuth";


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
    <AuthProvider>
    <ThemeProvider theme={{ mode: theme.mode }} >
      <Body>
      <Header />
    
      <Routes>
      <Route path="/" element={<Home />} />
          <Route
            path="/posts/:myId"
            element={
              <CheckAuth>
                <SinglePost />
              </CheckAuth>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/signUp" element={<SignUpWrapper />} />
          <Route path="/posts/:myId/:type" element={<EditPost />} />
          <Route path="/about-us" element={<Navigate to="/about" />} />
        </Routes>
       
      <Button onClick={() => theme.toggle()}>
            {theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
              
         
     
      </Body>
    </ThemeProvider>
    </AuthProvider>
  );
}
export default App;