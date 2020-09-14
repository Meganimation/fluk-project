import React from 'react';
import './App.css';
import styled from 'styled-components';
import { createGlobalStyle, css, keyframes } from 'styled-components'

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const fadeIn = keyframes`
  0% {
    color: black;
    opacity: 0%;
  }
  100% {
    color: white;
    opacity: 100%;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 100px;
  animation: ${fadeIn} 5s;
`

const Body = styled.div`
  color: white; 
  size: 90px;
  animation: ${fadeIn} 10s;
`

function App() {
  return (
<>

<Box>
  <Title> FLUK </Title>
  <Body>Coming Soon </Body>
</Box> 

</>
  );
}

export default App;
