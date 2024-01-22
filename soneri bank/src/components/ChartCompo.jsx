import React from 'react'
//import {Chart as ChartJS} from "chart.js/auto";
import { useState } from "react";
import { LineChart } from './LineChart';
import { Data } from '../assets/Data';
import { LineChart2 } from './LineChart2';
import { BarChart } from './BarChart';
import { LineMultiAxis } from './LineMultiAxis';
export const ChartCompo = () => {

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   /* const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "blue",
              "green",
              "red",
              "pink",
              "yellow"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ],
        datasets: [
          {
            label: "Users Gain ",
            label2: "Users Lost ",
            data: Data.map((data) => data.userLost),
            backgroundColor: [
              "blue",
              "green",
              "red",
              "pink",
              "yellow"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      }); */

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },

          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
          
        },
        scales: {
          x: {
            categorySpacing: 0.2,
            // ... other scale options
          },
      
        },
      };
     
      
  return (
    <div style={{ width: 700 }}>
    <LineChart labels={labels} options={options}  /> 
    <LineChart2 labels={labels} options={options}  />
    <BarChart labels={labels} options={options}  />
    <LineMultiAxis labels={labels}  />
  </div>
  )
}
