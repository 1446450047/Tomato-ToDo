import {Route, Routes} from "react-router";
import Home from "../components/main/Home";
import Tomato from "../components/main/Tomato";
import ToDoList from "../components/main/ToDoList";
import Record from "../components/main/Record";
import Info from "../components/main/Info";
import * as React from "react";
import styled from "styled-components";

export default function MainView(){
    return(
        <MainWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="tomato" element={<Tomato />} />
                <Route path="todoList" element={<ToDoList />} />
                <Route path="record" element={<Record />} />
                <Route path="info" element={<Info />} />
            </Routes>
        </MainWrapper>

    )
}
const MainWrapper = styled.div`
  width: 60%;
  background: #ffffff;
  
  //尽可能的高
  flex: 1;
`