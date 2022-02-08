import * as React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Icon from "./Icon";

function Header() {
    function click(e){
        console.dir(e.target)
        console.log(e.target.parent);
        console.log(e.target.offsetLeft)
    }
    return (
        <HeaderWrapper onClick={click}>
            <HeadItem> <Link to="/"><Icon symbolName="logo"/></Link> </HeadItem>
            <HeadItem> <Link to="/tomato"><Icon symbolName="Tomato"/>Tomato</Link> </HeadItem>
            <HeadItem> <Link to="/todoList"><Icon symbolName="todoList"/>TodoList</Link> </HeadItem>
            <HeadItem> <Link to="/record"><Icon symbolName="record"/>Record</Link> </HeadItem>
            <HeadItem> <Link to="/info"><Icon symbolName="info"/>详情</Link> </HeadItem>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  width: 60%;
  height: 80px;
  background: #ffffff;
  display: flex;
  border-bottom: 1px solid #E5E5E5;
  z-index: 1;
`;

const HeadItem = styled.div`
     width: 16.6%;
     display: flex;
     justify-content: center;
     a{
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 20px;
         color: inherit;
        svg{
           margin: 0 8px;
           width: 60px;
           height: 60px;
         }
     }
`;

export default Header;

