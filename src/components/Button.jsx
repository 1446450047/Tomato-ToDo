import React from "react";
import styled from "styled-components";

export function Button({children,onClick}){
    return(<Btn onClick={onClick}>{children}</Btn>)
}

const Btn = styled.div`
      background:#1A1A1A;
      color: #fff;
      
      display: inline-block;
      padding: 2px 12px;
      cursor: pointer;
      text-align: center;
      min-width: 80px;
      vertical-align: middle;
      min-height: 36px;
      border-radius: 25px;
      line-height: 32px;
      margin: 4px 8px;
      user-select: none;
      &:hover{
        background:#474545;
      }
`