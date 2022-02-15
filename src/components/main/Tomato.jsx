import React from "react";
import styled from "styled-components";
import {Button} from "../Button";

function Tomato() {
    return (
        <TomatoWrapper>
            <Timing>
                <span>25</span>
                <span>:</span>
                <span>00</span>
            </Timing>
            <ButtonGroup>
                <Button>开启一个番茄</Button>
                <Button>休息一个间隙</Button>
            </ButtonGroup>
            <h3>今日番茄</h3>
            <TomatoLists>
                <tr>
                    <th>序号</th>
                    <th>类型</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>用时</th>
                    <th>是否完成</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>番茄</td>
                    <td>21：23</td>
                    <td>21：33</td>
                    <td>10</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>休息</td>
                    <td>21：43</td>
                    <td>21：49</td>
                    <td>6</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>番茄</td>
                    <td>21：23</td>
                    <td>21：33</td>
                    <td>10</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>休息</td>
                    <td>21：43</td>
                    <td>21：49</td>
                    <td>6</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>番茄</td>
                    <td>21：23</td>
                    <td>21：33</td>
                    <td>10</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>休息</td>
                    <td>21：43</td>
                    <td>21：49</td>
                    <td>6</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>番茄</td>
                    <td>21：23</td>
                    <td>21：33</td>
                    <td>10</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>休息</td>
                    <td>21：43</td>
                    <td>21：49</td>
                    <td>6</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>番茄</td>
                    <td>21：23</td>
                    <td>21：33</td>
                    <td>10</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>休息</td>
                    <td>21：43</td>
                    <td>21：49</td>
                    <td>6</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>番茄</td>
                    <td>21：23</td>
                    <td>21：33</td>
                    <td>10</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>休息</td>
                    <td>21：43</td>
                    <td>21：49</td>
                    <td>6</td>
                    <td>是</td>
                </tr>
            </TomatoLists>
        </TomatoWrapper>
    );
}

const Timing = styled.div`
    border: 2px solid #F76E11;
    border-radius: 15px;
    padding: 40px;
    margin: 0 160px;
    font-size: 120px;
    color: #F76E11;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 60px 0;
    div{
      background:#F76E11;
      color: #fff;
      &:hover{
         background:#ef8137;
      }
    }
`;
const TomatoWrapper = styled.div`
  border: 1px solid red;
  width: 60%;
  margin: 60px auto;
  h3{
      text-align: center;
  }
`;
const TomatoLists = styled.table`
  border: 2px solid #F8802E;
  border-radius: 4px;
  margin: 0 auto;
  padding: 12px 18px;
  tr{
    padding: 5px;
  }
`;
export default Tomato;