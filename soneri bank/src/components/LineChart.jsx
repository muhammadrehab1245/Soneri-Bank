import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import { kpis } from '../assets/Data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
export const LineChart = ({labels,options}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
   //     fill:true,
        label: 'Profit',
       // data: labels.map(() => kpis.monthlyData.revenue.number({ min: 8000, max:23000 })),
       data: kpis[0].monthlyData.map((data) => parseFloat(data.revenue.slice(1))-parseFloat(data.expenses.slice(1))), 
       borderColor: 'green',
        backgroundColor: '#228b22',
  
      },
      {
       // fill:true,
        label: 'Revenue',
       // data: labels.map(() => kpis.monthlyData.expenses.datatype.number({ min: 8000, max:23000 })),
       data: kpis[0].monthlyData.map((data) => parseFloat(data.revenue.slice(1))), 
       borderColor: 'green',
        backgroundColor: '#39ff14',
        overflow:'hidden'
      },
    ],
  })
    
      
  return (
    <div className="chart-container">
   {/* <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020"
          }
        }
      }}
    /> */
    <Line options={options} data={chartData} />}
  </div>
  )
}
