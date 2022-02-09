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
                    <a href="https://github.com/1446450047"> <Icon symbolName="github"/>github</a>
                    <a href="https://www.zhihu.com/people/hezhongfeng/posts"> <Icon symbolName="zhihu"/>zhihu</a>
                    <a href="#"><Icon symbolName="wechat"/>VX:hzf1446450047</a>
                </div>
                <div className="copyRight">copyright©2022 禁止商用</div>
            </Footer>
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

const Footer = styled.footer`
height: 70px; 
width: 100%;
background:#fff;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border-top: 1px solid #E5E5E5;
  .myInfo{
    width: 100%;
    display: flex;
    justify-content: space-around;
    a{
       display: flex;
       align-items: center;
       &:hover{
        text-decoration: underline;
       }
       svg{
         width: 24px;
         height: 24px;
      }
    }
  }
  .copyRight{
    
  }
`;

export default App;