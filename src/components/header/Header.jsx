import * as React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Icon from "./Icon";

function Header(){
    return(
        <HeaderWrapper>
            <HeadItem> <Icon symbolName="logo" /> <Link to="/">logo</Link></HeadItem>
            <HeadItem>  <Link to="/tomato">tomato</Link></HeadItem>
            <HeadItem> <Link to="/todoList">todoList</Link></HeadItem>
            <HeadItem> <Link to="/record">record</Link></HeadItem>
            <HeadItem> <Link to="/info">info</Link></HeadItem>
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.header`
  width: 60%;
  height: 80px;
  background: #ffffff;
  display: flex;
`;

const HeadItem = styled.div`
    width: 16.6%;
     border: 1px solid red;
     svg{
     width: 60px;
     height: 60px;
     }
`


export default Header

