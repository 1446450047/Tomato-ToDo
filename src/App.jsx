import * as React from "react";
import Header from "./components/header/Header";
import MainView from "./routes";
import styled from "styled-components";

function App() {
    return (
        <Wrapper>
            <Header/>
            <MainView/>
            <Footer>footer</Footer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  background:#EDF5FA;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

const Footer = styled.footer`
height: 90px;
background:#fff;
`

export default App;