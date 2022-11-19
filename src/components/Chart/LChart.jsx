import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LChart = () => {
    const data = [
        {
          name: 'Day 1',
          previous: 4000,
          current: 2400,
          amt: 2400,
        },
        {
          name: 'Day 2',
          previous: 3000,
          current: 1398,
          amt: 2210,
        },
        {
          name: 'Day 3',
          previous: 2000,
          current: 9800,
          amt: 2290,
        },
        {
          name: 'Day 4',
          previous: 2780,
          current: 3908,
          amt: 2000,
        },
        {
          name: 'Day 5',
          previous: 1890,
          current: 4800,
          amt: 2181,
        },
        {
          name: 'Day 6',
          previous: 2390,
          current: 3800,
          amt: 2500,
        },
        {
          name: 'Day 7',
          previous: 3490,
          current: 4300,
          amt: 2100,
        },
      ];
  return (
    <div>
        <LineChart
          width={700}
          height={450}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="current" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="previous" stroke="#82ca9d" />
        </LineChart>
    </div>
  )
}

export default LChart