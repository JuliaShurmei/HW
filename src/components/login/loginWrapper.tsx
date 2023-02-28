import React from 'react';
import styled from 'styled-components';
import { Login } from './Login';


export const LoginWrapper = () => {
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

    return (
        <div>
        <LoginContainer>
        <Login />
        <ImageContainer>
        <img src='./../background.png' />
        </ImageContainer>
      </LoginContainer>

        </div>
    );
};

