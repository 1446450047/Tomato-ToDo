import React, {useEffect} from "react";
import * as echarts from "echarts";
import styled from "styled-components";

function Record() {
    const content = React.useRef();
    useEffect(() => {
        let myChart = echarts.init(content.current);
        const option = {
            title:{
                text:"番茄工作法历史统计",
                left:"center",
                top:"20px"
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line',
                    smooth: true
                }
            ]
        }
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

