import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "../Button";
import {getTomatoId, setTomatoes} from "../../data";
import Icon from "../header/Icon";

function Tomato() {
    const timing = React.createRef();
    const [minute, setMinute] = useState(1);
    const [second, setSecond] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [beginTime,setBeginTime] = useState("")
    const [doing ,setDoing] = useState(false)
    let newIntervalId
    useEffect(()=>{
        if(minute === 0 && second ===0){
            clearInterval(intervalId)
            //创建一个记录
            let record = {
                id:getTomatoId(),
                type:"tomato",
                createDay: beginTime.toLocaleDateString(),
                beginTime:beginTime.toLocaleTimeString(),
                endTime: new Date().toLocaleTimeString(),
            }
            setTomatoes(record)
            console.log(record);
        }
    },[minute,second])

    const handleTomato = () => {
        setDoing(!doing)
        setBeginTime(() =>  new Date())
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
        let m = minute
        let s = second
        newIntervalId = setInterval(() => {
            if (s >= 1) {
                s--
                setSecond(prevCount => prevCount - 1);
            } else if (m >=1) {
                s = 10
                m--
                //这两个的顺序不能错，因为每次通过写接口改变变量之后都会刷新视图，重新render，如果minute先变为0，second没变为10时，就是 minute = 0 second = 0 会提前结束定时器
                setSecond(() => 10);
                setMinute((minute) => (minute - 1));
            }
        }, 1000);
        setIntervalId(newIntervalId);
    };
    const handleSpace = function () {
        console.log(minute, second);
    };
    return (
        <TomatoWrapper>
            <Timing ref={timing}>
                <span>{minute}</span>
                <span>:</span>
                <span>{second}</span>
            </Timing>
            <ButtonGroup>
                <Button onClick={handleTomato}><Icon symbolName={doing? "end" : "begin"} /> 开启一个番茄</Button>
                <Button onClick={handleSpace}><Icon symbolName={doing? "end" : "begin"} /> 休息一个间隙</Button>
            </ButtonGroup>
            <h3>今日番茄</h3>
            <TomatoLists>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>类型</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>用时</th>
                    <th>是否完成</th>
                </tr>
                </thead>
                <tbody>
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
       padding: 6px 24px;    
       text-align: center;
       border-bottom: 1px solid #FFBC80;
    }
  }
`;
export default Tomato;