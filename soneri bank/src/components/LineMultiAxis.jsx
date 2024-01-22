import React, { useState } from 'react'
import { kpis } from '../assets/Data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const LineMultiAxis = ({labels}) => {

  const [chartData, setChartData] = useState({
    labels,
    scales: {
    },
    datasets: [
      {
        label: 'Operational',
        data: kpis[0].monthlyData.map((data) => parseFloat(data.operationalExpenses.slice(1))),
        borderColor: 'green',
        backgroundColor: '#228b22',
        tension:0.4,
        yAxisID: 'y',
      },
      {
        label: 'Non Operational',
        data: kpis[0].monthlyData.map((data) => parseFloat(data.nonOperationalExpenses.slice(1))),
        borderColor: 'green',
        backgroundColor: '#39ff14',
        tension:0.4,
        yAxisID: 'y1',
      },
    ],
  })

    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
            
          },
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
         
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };
      
      return <Line options={options} data={chartData} />;
}
