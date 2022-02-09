import React from "react";
import study from "../../images/study.png";
import styled from "styled-components";
import {Button} from "../Button";
import {Link} from "react-router-dom";

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
                <span>Go:</span>
                <Button><Link to="tomato">番茄</Link></Button>
                <Button><Link to="todoList">ToDo</Link></Button>
                <Button><Link to="record">历史数据</Link></Button>
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
      justify-content: center;
     div{
         width: 80%;
       }
      img{
         width: 80%;
      }     
  };
`;
const HomeWrapper = styled.div`
  padding-top: 20px;  
`
const Buttons = styled.div`
  padding: 60px 100px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
   span{
      line-height: 44px;
      text-align: center;
      font-size: 30px;
  }
  @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
    }
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