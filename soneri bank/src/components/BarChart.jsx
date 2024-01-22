import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import { kpis } from '../assets/Data';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
export const BarChart = ({options,labels}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

      const [chartData, setChartData] = useState({
        labels,
        datasets: [
          {
            fill:'origin',
            label: 'Revenue',
           // data: labels.map(() => kpis.monthlyData.revenue.number({ min: 8000, max:23000 })),
           data: kpis[0].monthlyData.map((data) => parseInt(data.revenue.slice(1))), 
           borderColor: 'green',
           backgroundColor: '#228b22',
      
          }
        ],
      })
  return (
    <Bar options={options} data={chartData} />
  )
}
