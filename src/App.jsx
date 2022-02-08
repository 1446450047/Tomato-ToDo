import * as React from "react";
import Header from "./components/header/Header";
import MainView from "./routes";
import styled from "styled-components";
import Icon from "./components/header/Icon";

function App() {
    return (
        <Wrapper>
            <Header/>
            <MainView/>
            <Footer>
                <div className="myInfo">
                    <a href="#"> <Icon symbolName="github"/>github</a>
                    <a href="#"> <Icon symbolName="zhihu"/>zhihu</a>
                    <a href="#"><Icon symbolName="wechat"/>VX:hzf1446450047</a>

                </div>
                <div className="copyRight">copyright©2022 禁止商用</div>
            </Footer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 100vh;
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

const Footer = styled.footer`
height: 90px; 
width: 100%;
background:#fff;
  .myInfo{
    svg{
      width: 24px;
      height: 24px;
    }
  }
`;

export default App;