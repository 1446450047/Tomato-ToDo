import * as React from "react";
import Header from "./components/header/Header";
import MainView from "./routes";
import styled from "styled-components";

function App() {
    return (
        <Wrapper className="wrapper">
            <Header/>
            <MainView/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background:#EDF5FA;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;



export default App;