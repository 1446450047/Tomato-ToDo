import * as React from "react";
import styled from "styled-components";

function Header(){
    return(
        <HeaderWrapper>
            <HeadItem>logo</HeadItem>
            <HeadItem>tomato</HeadItem>
            <HeadItem>ToDoList</HeadItem>
            <HeadItem>record</HeadItem>
            <HeadItem>info</HeadItem>
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
`


export default Header

