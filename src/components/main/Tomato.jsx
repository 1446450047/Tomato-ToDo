import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "../Button";
import {getTomatoes, getTomatoId, setTomatoes} from "../../data";
import Icon from "../header/Icon";

function Tomato() {
    const timing = React.createRef();
    const [minute, setMinute] = useState(25);
    const [second, setSecond] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [beginTime, setBeginTime] = useState("");
    const [doing, setDoing] = useState(false);
    const [tomatoes, setNewTomatoes] = useState(getTomatoes());
    let newIntervalId;
    function endTomato(intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        let record = {
            id: getTomatoId(),
            type: "tomato",
            createDay: beginTime.toLocaleDateString(),
            beginTime: beginTime.toLocaleTimeString(),
            endTime: new Date().toLocaleTimeString(),
            cost: (24 - minute) * 60 + (60 - second),
        };
        setTomatoes(record);
        setMinute(25);
        setSecond(0);
        setDoing(false);
    }

    useEffect(() => {
        if (minute === 0 && second === 0) {
            endTomato(intervalId);
        }
    }, [minute, second]);
    useEffect(() => {
        setNewTomatoes(getTomatoes());
    }, [intervalId]);
    const handleTomato = () => {
        setDoing(!doing);
        setBeginTime(() => new Date());
        if (intervalId) {
            endTomato(intervalId);
            return;
        }
        let m = minute;
        let s = second;
        newIntervalId = setInterval(() => {
            if (s >= 1) {
                s--;
                setSecond(prevCount => prevCount - 1);
            } else if (m >= 1) {
                s = 59;
                m--;
                //这两个的顺序不能错，因为每次通过写接口改变变量之后都会刷新视图，重新render，如果minute先变为0，second没变为10时，就是 minute = 0 second = 0 会提前结束定时器
                setSecond(() => 59);
                setMinute((minute) => (minute - 1));
            }
        }, 1000);
        setIntervalId(newIntervalId);
    };
    return (
        <TomatoWrapper>
            <Timing ref={timing}>
                <span>{minute}</span>
                <span>:</span>
                <span>{second}</span>
            </Timing>
            <ButtonGroup>
                <Button onClick={handleTomato}><Icon symbolName={doing ? "end" : "begin"}/> {doing ? "结束" : "开启一个番茄"}</Button>
            </ButtonGroup>
            <h3>今日番茄</h3>
            <TomatoLists>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>创建日期</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>用时</th>
                    <th>是否完成</th>
                </tr>
                </thead>
                <tbody>
                {tomatoes.reverse().map(tomato =>
                    <tr key={tomato.id}>
                        <td>{tomato.id}</td>
                        <td>{tomato.createDay}</td>
                        <td>{tomato.beginTime}</td>
                        <td>{tomato.endTime}</td>
                        <td>{`${Math.floor(tomato.cost/ 60) }分${tomato.cost % 60}秒`}</td>
                        <td>{tomato.cost >= 1499 ? "是" : "否"}</td>
                    </tr>
                )}
                </tbody>
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
    overflow: hidden;
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
  width: 60%;
  margin: 60px auto;
  h3{
      text-align: center;
      padding-bottom: 8px;
  }
`;
const TomatoLists = styled.table`
  border: 2px solid #F8802E;
  border-radius: 4px;
  margin: 0 auto;       
  border-spacing: 0;
  padding: 12px 18px;
  tr{
    th,td{
       padding: 12px 24px;    
       white-space: nowrap;
       text-align: center;
       border-bottom: 1px solid #FFBC80;
    }
    th{
        background:#F8802E;
        color: #000;
    }
  }
  tr:hover{
    background:#F8802E;
    animation: fadeIn 1s;
    color: #fff;
  }
  @keyframes fadeIn{
    0%{transform: scale(98%);}
    50%{transform: scale(102%);}
    100%{transform: scale(100%);}
  } 
`;

export default Tomato;