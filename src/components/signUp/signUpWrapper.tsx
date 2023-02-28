import React from 'react';
import styled from 'styled-components';
import { SignUp } from './signUp';


export const SignUpWrapper = () => {
 
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
        <SignUpContainer>
        <SignUp />
        <ImageContainer>
        <img src='./../background.png' />
        </ImageContainer>
        </SignUpContainer>

        </div>
    );
};

