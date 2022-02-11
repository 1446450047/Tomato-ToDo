import React from "react";
import styled from "styled-components";
import Icon from "../header/Icon";

function ToDoList() {
    return (
        <ToDoWrapper>
            <InputWrapper><Icon symbolName="add" /> <input type="text"/></InputWrapper>
        </ToDoWrapper>
    );
}

const ToDoWrapper = styled.div`
  width: 60%;
  margin: 60px auto;
  padding: 20px;
  
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
    font-size: 20px;
  }
  >svg{
    width: 2em;
    height: 2em;
    margin-left: 8px;
  }
`
export default ToDoList;