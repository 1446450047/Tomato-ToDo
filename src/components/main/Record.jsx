import React, {useEffect} from "react";
import * as echarts from "echarts";
import styled from "styled-components";
import {getTomatoes} from "../../data";

function Record() {
    const content = React.useRef();
    useEffect(() => {
        const tomatoes = getTomatoes()
        console.log(tomatoes);
        const map = {}
        tomatoes.forEach((item,index)=>{
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
        <div>
            <TomatoRecord ref={content}>

            </TomatoRecord>
        </div>
    );
}
const TomatoRecord = styled.div`
  border: 1px solid red;
  height: 400px;
`
export default Record;

