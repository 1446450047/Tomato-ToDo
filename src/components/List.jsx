import styled from "styled-components";
import React from "react";

export default function List({lists}){
    console.log(lists);
    return (
        <ListWrapper>
        {/*    lists.map((item)=>{*/}
        {/*    <li>item</li>*/}
        {/*})*/}
        </ListWrapper>)
}

const ListWrapper = styled.ul`
  border: 1px solid red;
  width: 60%;
  margin: 0 auto;
`