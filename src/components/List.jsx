import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {randomColor, getTasks, setTask} from "../data";
import {Task} from "./Task";

export default function List({lists}) {
    const [tasks,setTasks] = useState(lists)
    const taskIWrapper = React.createRef()
    useEffect(()=>{
        if(tasks.length!==0){
            let taskCount = taskIWrapper.current.children.length
            for(let i = 1; i < taskCount;i++){
                if(taskIWrapper.current.children[i].nodeName === "DIV") taskIWrapper.current.children[i].style.boxShadow = `0 0 5px ${randomColor()}`
            }
        }
    })
    const toggleDone = function(e){
        let id = parseInt(e.target.id)
        let taskIndex = undefined
        tasks.forEach((item,index)=>{
            if(item.id === id ) return taskIndex = index
        })
        tasks[taskIndex].done  = !tasks[taskIndex].done
        setTask(tasks)
        setTasks(getTasks())
    }
    useEffect(()=>{
        setTasks(getTasks())
    },[lists])
    return (
        <ListWrapper ref={taskIWrapper}>
            <h3>未完成</h3>
            {tasks.filter((item)=>item.done === false).map((item) =>
                <Task key={item.id}>
                    <li
                        className={item.done ? "finish" : "willDo"}>{item.content} ----- {item.id}<p>{item.createTime}</p>
                    </li>
                    <div id={item.id} onClick={toggleDone}>{item.done ? "again" : "finish"}</div>
                </Task>
            )}
            <h3>已完成</h3>
            {tasks.filter((item)=>item.done === true).map((item) =>
                <Task key={item.id}>
                    <li
                        className={item.done ? "finish" : "willDo"}>{item.content} ----- {item.id}<p>{item.createTime}</p>
                    </li>
                    <div id={item.id} onClick={toggleDone}>{item.done ? "again" : "finish"}</div>
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