import styled from "styled-components";
import React, {useEffect} from "react";
import {getTasks} from "../data";
import * as echarts from "echarts";

const TodoListsRecord = function () {
    const content = React.useRef();
    useEffect(() => {
        const todoLists = getTasks();
        const map = {};
        todoLists.forEach((item) => {
            map[item.createDay] === undefined ? map[item.createDay] = 1 : map[item.createDay]++;
        });

        let myChart = echarts.init(content.current);
        let today = (new Date()).toLocaleDateString();
        const option = {
            title: {
                text: "ToDoList 历史记录",
                left: "center",
                top: "20px"
            },
            xAxis: {
                type: "category",
                data: [today]
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [2,4,6,8,10],
                    type: "line",
                    smooth: true,
                },

            ],
            tooltip: {
                show: true
            },
        };
        option.xAxis.data = Object.keys(map).length !== 0 ?  Object.keys(map): [today]
        option.series[0].data = Object.values(map).length !== 0 ? Object.values(map) : [0]

        myChart.setOption(option);
    });
    return (
        <TodoListRecord ref={content}/>
    );
};
const TodoListRecord = styled.div`
  height: 400px;
`;
export default TodoListsRecord;