import Icon from "../header/Icon";
import * as React from "react";
import styled from "styled-components";

export  default function Footer(){
    return (
        <FooterWrapper>
            <div className="myInfo">
                <a href="https://github.com/1446450047"> <Icon symbolName="github"/>github</a>
                <a href="https://www.zhihu.com/people/hezhongfeng/posts"> <Icon symbolName="zhihu"/>zhihu</a>
                <a href="#"><Icon symbolName="wechat"/>VX:hzf1446450047</a>
            </div>
            <div className="copyRight">copyright©2022 禁止商用</div>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
height: 70px; 
width: 100%;
background:#fff;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border-top: 1px solid #E5E5E5;
  .myInfo{
    width: 100%;
    display: flex;
    justify-content: space-around;
    a{
       display: flex;
       align-items: center;
       &:hover{
        text-decoration: underline;
       }
       svg{
         width: 24px;
         height: 24px;
      }
    }
  }
`;