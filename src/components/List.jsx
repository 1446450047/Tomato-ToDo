import styled from "styled-components";
import React from "react";

export default function List({lists}) {

    return (
        <ListWrapper>
            <h3>任务列表</h3>
            {lists.map((item) =>
                <Task key={item.id}>
                    <li
                        className={item.done ? "finish" : "willDo"}>{item.content}<p>{item.createTime}</p>
                    </li>
                    <div>finish</div>
                </Task>
            )}

        </ListWrapper>);
}
const Task = styled.div`
      box-shadow: 0 0 3px black;
      border-radius: 15px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      li{
          margin: 12px ;
          &.finish{
            text-decoration: line-through;
         }
      }
      div{
        display: flex;
        align-items: center;
        padding: 0 16px;
        background:#1A1A1A;
        color: #fff;
        cursor: pointer;
        border-radius: 0 15px 15px 0;
        &:hover{
          background:#3c3b3b;
        }
      }
`;
const ListWrapper = styled.ul`
  width: 60%;
  margin: 0 auto;
  >h3{
    margin-bottom: 18px;
  }
`;