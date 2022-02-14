import styled from "styled-components";
import React, {useEffect} from "react";
import {randomColor} from "../data";
import {Task} from "./Task";

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