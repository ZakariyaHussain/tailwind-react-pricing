import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';

const MarkChart = ({ marksPromise }) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    //data processing for the chart - nested to plain object
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.math,
            chemistry: studentData.marks.chemistry,
            physics: studentData.marks.physics,
        }
        return student;
    })
    console.log(marksChartData);
    return (
        <div className='mt-20'>
            <BarChart width={600} height={400} data={marksChartData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"math"} fill="#8884d8" activeBar={<Rectangle fill="#888434" stroke="#888111"/>}></Bar>
                {/*  activeBar={<Rectangle fill="pink" stroke="blue"/>} */}
                <Bar dataKey={"chemistry"} fill="#888388" activeBar={<Rectangle fill="#888300" stroke="#888611"/>}></Bar>
                <Bar dataKey={"physics"} fill="#888408" activeBar={<Rectangle fill="#888671" stroke="#888699"/>}></Bar>
                <Tooltip></Tooltip>
                <Legend></Legend>
                {/* Legend show bar(color) name */}
            </BarChart>
        </div>
    );
};

export default MarkChart;