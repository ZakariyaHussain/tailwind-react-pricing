import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
      {
        "id": "stu_001",
        "name": "Alice",
        "math": 88,
        "chemistry": 92,
        "physics": 85
      },
      {
        "id": "stu_002",
        "name": "Bob",
        "math": 76,
        "chemistry": 81,
        "physics": 79
      },
      {
        "id": "stu_003",
        "name": "Charlie",
        "math": 91,
        "chemistry": 89,
        "physics": 94
      },
      {
        "id": "stu_004",
        "name": "Diana",
        "math": 84,
        "chemistry": 86,
        "physics": 80
      },
      {
        "id": "stu_005",
        "name": "Ethan",
        "math": 73,
        "chemistry": 78,
        "physics": 75
      }
    ]
  

const ResultCharts = () => {
    return (
        <div className='mt-20'>
            <LineChart width={600} height={400} data={resultData }>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line stroke="red" dataKey="math"></Line>
                <Line stroke="blue" dataKey={"chemistry"}></Line>
                <Line  stroke="green" dataKey={"physics"}></Line>
                <Tooltip></Tooltip>
                {/* Tooltip show details when hover cursor on the chart */}
            </LineChart>
        </div>
    );
};

export default ResultCharts;