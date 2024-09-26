import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Donut() {
    
    let data = [
        {
          label: "Facebook",
          value: 65, 
          color: "#0E64F6",
        },
        {
          label: "Google",
          value: 25,
          color: "#34A853",
        },
        {
          label: "Tiktok",
          value: 10, 
          color: "#EA2A5D",
        },
    ];

    const options = {
        plugins: {
            legend: {
                display: true, 
                position: 'bottom',
                labels: {
                    usePointStyle: true, 
                    pointStyle: 'circle', 
                    padding: 20, 
                },
            },
            tooltip: {
                enabled: true, 
            },
        },
        cutout: '50%', 
        responsive: true,
        maintainAspectRatio: false,
    };

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => item.value),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ width: '230px', height: '230px' }}>
            <Doughnut data={finalData} options={options} />
        </div>
    );
}
