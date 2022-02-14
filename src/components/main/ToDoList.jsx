import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Icon from "../header/Icon";
import {Button} from "../Button";
import List from "../List";
import {getId, getTasks, updateId, addTask} from "../../data";
function ToDoList() {
    const taskInput = React.createRef()
    let [todoRecord,setTodoRecord] =  useState(getTasks())
    const [id,setId] = useState(getId())
    useEffect(()=>{
        setTodoRecord(getTasks())
    },[id])
    // useEffect(()=>{
    //     console.log("hello");
    // },[todoRecord])
    const addTaskHandle = function (){
        let content = taskInput.current.value
        if(content === ""){
            alert("内容不能为空")
        }else{
            let id = getId()
            let time = new Date()
            let createDay =  time.toLocaleDateString() //年月日
            let createTime =  time.toLocaleTimeString() //时间
            const task = {id:id++,content,createDay,createTime,done:false}
            setId(id)
            updateId(id)
            addTask(task)
            taskInput.current.value = ""
        }
    }
    return (
        <>
            <ToDoWrapper>
                <InputWrapper><Icon symbolName="add"/> <input type="text" ref={taskInput} /></InputWrapper>
                <Button onClick={addTaskHandle}>添加</Button>
            </ToDoWrapper>
            <List lists={todoRecord}/>
        </>
    );
}

const ToDoWrapper = styled.div`
  width: 60%;
  margin: 60px auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  >div{
    margin-top: 0;
    border-radius: 15px;
    line-height: 46px;
  }
  @media (max-width: 1000px){
    width: 80%;
    
  }
  @media (max-width: 800px){
    width: 100%;
    
  }
`;
const InputWrapper = styled.label`
  box-shadow: 0 0 3px black;
  border-radius: 15px;
  height: 50px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  >input{
    border-radius: 15px;
    outline: none;
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 20px;
  }
  >svg{
    width: 2em;
    height: 2em;
    margin-left: 8px;
  }
`;

export default ToDoList;