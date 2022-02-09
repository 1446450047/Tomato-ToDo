import * as React from "react";
import Header from "./components/header/Header";
import MainView from "./routes";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
function App() {

    return (
        <Wrapper>
            <Header />
            <MainView />
            <Footer/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 80%;
  display: flex;
  background:#EDF5FA;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  @media (max-width: 1500px) { 
      width: 90%;
  }
  @media (max-width: 1200px) { 
      width: 100%;
  }
`;


export default App;