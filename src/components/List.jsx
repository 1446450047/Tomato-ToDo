import styled from "styled-components";
import React, {useEffect} from "react";
import {randomColor} from "../data";

export default function List({lists}) {

    const taskIWrapper = React.createRef()
    useEffect(()=>{
        if(lists.length!==0){
            let taskCount = taskIWrapper.current.children.length
            for(let i = 1; i < taskCount;i++){
                taskIWrapper.current.children[i].style.boxShadow = `0 0 5px ${randomColor()}`
            }
        }
    })
    return (
        <ListWrapper ref={taskIWrapper}>
            <h3>任务列表</h3>
            {lists.map((item) =>
                <Task key={item.id}>
                    <li
                        className={item.done ? "finish" : "willDo"}>{item.content}<p>{item.createTime}</p>
                    </li>
                    <div>finish</div>
                </Task>
            )}

        </ListWrapper>);
}
const Task = styled.div`
      border-radius: 15px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      li{
          color: #000;
          margin: 12px ;
          &.finish{
            text-decoration: line-through;
         }
         p{
          color: #FC4F4F;
         }
      }
      div{
        display: flex;
        align-items: center;
        padding: 0 16px;
        background:#1A1A1A;
        color: #fff;
        cursor: pointer;
        border-radius: 0 15px 15px 0;
        &:hover{
          background:#3c3b3b;
        }
      }
      transition: all 0.3s;
      &:hover{
        transform: scale(105%);
      }
      animation: fadeIn 0.8s;
      @keyframes fadeIn {
       0% {transform: scale(90%)}
       50% {transform: scale(105%)}
       100% {transform: scale(100%)}
     }
`;
const ListWrapper = styled.ul`
  width: 60%;
  margin: 0 auto;
  >h3{
    margin-bottom: 18px;
  }
  @media (max-width: 1000px){
    width: 80%;
    
  }
  @media (max-width: 800px){
    width: 100%;
    padding: 20px;
  }
`;