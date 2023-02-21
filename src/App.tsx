import styled from 'styled-components';
import { Login } from './components/login/Login';
import './App.css';

const LoginContainer = styled.div `
  display: flex;
  align-items: center;
 `;

const ImageContainer = styled.div `
flex: 0 1 65%;
display: flex;
justify-content: flex-end;
@media (max-width: 1200px) {
  display: none;
  }  
`;

function App() {
  return (
    <LoginContainer>
    <Login />
       <ImageContainer>
        <img src='./../background.png'/>
       </ImageContainer>
    </LoginContainer>
     );
}

export default App;
