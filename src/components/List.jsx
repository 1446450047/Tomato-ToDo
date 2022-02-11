import styled from "styled-components";
import React from "react";

export default function List({lists}) {

    return (
        <ListWrapper>
            {lists.map((item) =>
                <li key={item.id} className={item.done ? "finish" :"willDo" } >{item.content} ----- {item.createTime}</li>)}

        </ListWrapper>);
}

const ListWrapper = styled.ul`
  border: 1px solid red;
  width: 60%;
  margin: 0 auto;
`;