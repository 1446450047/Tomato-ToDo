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
            <div>
                <Button>开启一个番茄</Button>
                <Button>休息一个间隙</Button>
            </div>
            <h3>今日番茄</h3>
            <TomatoLists>
                列表
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
`;
const TomatoWrapper = styled.div`
  border: 1px solid red;
  width: 60%;
  margin: 60px auto;
`;
const TomatoLists = styled.table`
  border: 1px solid blue;
`;
export default Tomato;