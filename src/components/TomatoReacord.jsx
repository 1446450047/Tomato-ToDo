import styled from "styled-components";
import React, {useEffect} from "react";
import {getTomatoes} from "../data";
import * as echarts from "echarts";

const TomatoesRecord = function (){
    const content = React.useRef();
    useEffect(() => {
        const tomatoes = getTomatoes()
        console.log(tomatoes);
        const map = {}
        tomatoes.forEach((item)=>{
            map[item.createDay] === undefined ? map[item.createDay] = 1 : map[item.createDay]++;
        })
        console.log(Object.keys(map));
        console.log(Object.values(map));
        let myChart = echarts.init(content.current);
        let today = (new Date()).toLocaleDateString()
        console.log(today);
        const option = {
            title:{
                text:"番茄工作法历史统计",
                left:"center",
                top:"20px"
            },
            xAxis: {
                type: 'category',
                data: [today]
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [0],
                    type: 'line',
                    smooth: true,
                }
            ],
            tooltip:{
                show:true
            }
        }
        option.xAxis.data = Object.keys(map).length !== 0 ?  Object.keys(map): [today]
        option.series[0].data = Object.values(map).length !== 0 ? Object.values(map) : [0]
        myChart.setOption(option);
    });
    return (
        <TomatoRecord  ref={content}/>
    )
}
const TomatoRecord = styled.div`
  height: 400px;
`
export default TomatoesRecord