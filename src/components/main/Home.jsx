import React from "react";
import study from "../../images/study.png";
import styled from "styled-components";
import {Button} from "../Button";

function Home() {
    return (
        <HomeWrapper>
            <TextAndImage>
                <TextInfo>
                    <p> self-discipline & hard work</p>
                    <h2><span>番茄工作法</span> <span>&</span> <span>ToDo</span></h2>
                    <p>ToDo:一个事件代办笔记</p>
                    <p>番茄工作法(Pomodoro Technique):一种时间管理法方法</p>
                </TextInfo>
                <img src={study} alt="study"/>
            </TextAndImage>
            <Buttons>
                <Button>番茄</Button>
                <Button>ToDo</Button>
                <Button>历史数据</Button>
            </Buttons>
        </HomeWrapper>
    );
}

const TextAndImage = styled.div`
  display: flex;
  div{
    width: 50%;
  }
  img{
    width: 50%;
  }
   @media (max-width: 1000px) {
      flex-direction: column-reverse; 
      align-items: center;
       div{
         width: 80%;
       }
      img{
         width: 80%;
      }     
  };
`;
const HomeWrapper = styled.div`
  padding-top: 50px;
`
const Buttons = styled.div`
  
`;
const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-family: Scope One,serif;
  font-style: normal;
  font-weight: lighter;
  color: #F96444;
  font-size: 22px;
  line-height: 30px;
  padding-left: 30px;
  padding-top: 12px;
  p:nth-child(1){
    font-size: 36px;
  }
  p:nth-child(3){
    font-size: 14px;
    color: #000;
    font-family: Ramaraja,serif;
    font-weight: bold;
    margin-bottom: -120px;
  }
  p:nth-child(4){
    color: #000;
    font-weight: bold;
    font-family: Ramaraja,serif;
    font-size: 14px;
  }
  h2{
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    >span{
      font-weight: bold;
      margin-bottom: 24px;
    }
  }
    @media (max-width: 1300px) {
        p:nth-child(3){
          margin-bottom: -60px;
         }
    }
    @media (max-width: 900px) {
    min-height: 480px;
        p:nth-child(3){
          margin-bottom: 0;
         }
    }
`;
export default Home;