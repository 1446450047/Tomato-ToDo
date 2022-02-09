import React from "react";
import study from "../../images/study.png"
import styled from "styled-components";
function Home(){
    return(
        <div>
            <TextAndImage>
                <div className="textInfo">文字信息</div>
                <img src={study} alt="study"/>
            </TextAndImage>
            <Buttons>
                <button>番茄</button>
                <button>ToDo</button>
                <button>历史数据</button>
            </Buttons>
        </div>
    )
}
const TextAndImage = styled.div`
  border: 1px solid red;
  display: flex;
  div{
    width: 50%;
  }
  img{
    width: 50%;
  }
`
const Buttons = styled.div`
  border: 1px solid blue;
`
export default Home