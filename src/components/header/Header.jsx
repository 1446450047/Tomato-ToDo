import * as React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Icon from "./Icon";

function Header() {
    const bar = React.createRef();
    const headerRef = React.createRef()
    function click(e) {
        let currentNodeName = e.target.nodeName.toLowerCase();
        let currentNode = e.target;
        while (currentNodeName !== "div") {
            currentNode = currentNode.parentNode;
            currentNodeName = currentNode.nodeName.toLowerCase();
        }
        bar.current.style.left = currentNode.offsetLeft + "px";
        [...headerRef.current.children].forEach((item)=>{
            item.classList.remove("active")
        })
        currentNode.classList.add("active")
    }
    return (
        <HeaderWrapper className="header"  ref={headerRef} onClick={click}>
            <HeadItem className="active"> <Link to="/"><Icon symbolName="logo"/></Link> </HeadItem>
            <HeadItem> <Link to="/tomato"><Icon symbolName="Tomato"/>Tomato</Link> </HeadItem>
            <HeadItem> <Link to="/todoList"><Icon symbolName="todoList"/>TodoList</Link> </HeadItem>
            <HeadItem> <Link to="/record"><Icon symbolName="record"/>Record</Link> </HeadItem>
            <HeadItem> <Link to="/info"><Icon symbolName="info"/>详情</Link> </HeadItem>
            <div ref={bar}></div>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  border-bottom: 1px solid #E5E5E5;
  position: relative;
  div:last-child{
      transition: all 0.5s;
      position: absolute;
      width: 16.6%;
      top: 100%;
      left: 0;
      border-bottom: 2px solid #F76E11;
  }
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
     &.active{
        color: #F76E11;
     }
`;

export default Header;

