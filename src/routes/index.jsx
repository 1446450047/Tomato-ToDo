import {Route, Routes} from "react-router";
import Home from "../components/main/Home";
import Tomato from "../components/main/Tomato";
import ToDoList from "../components/main/ToDoList";
import Record from "../components/main/Record";
import Info from "../components/main/Info";
import * as React from "react";

export default function MainView(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tomato" element={<Tomato />} />
            <Route path="todoList" element={<ToDoList />} />
            <Route path="record" element={<Record />} />
            <Route path="info" element={<Info />} />
        </Routes>
    )
}