import React from "react"
import { Doughnut } from "react-chartjs-2"

import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js"

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

export const DoughnutGraph = React.memo(({ device }) => {
    const labels = device && device.map((i) => i.device);
    const dataValues = device && device.map((i) => i.percentage);
    function generateRandomColor(baseHue) {
        const hue = (baseHue + Math.floor(Math.random() * 100)) % 360;
        const saturation = '90%';
        const lightness = '50%';
        return `hsl(${hue}, ${saturation}, ${lightness})`;
    }
    const baseHue = Math.floor(Math.random() * 360);
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'My First Dataset',
                data: dataValues,
                backgroundColor: [
                    generateRandomColor(baseHue),
                    generateRandomColor(baseHue),
                    generateRandomColor(baseHue),
                    generateRandomColor(baseHue),
                ],
                hoverOffset: 4
            }]
    };


    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Position the legend at the bottom
                align: 'center',
                labels: {
                    usePointStyle: true, // Use point style for legend labels
                },
            },
        },
        layout: {
            padding: {
                bottom: 0, // Add padding at the bottom to accommodate the legend
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };
    return <Doughnut options={options} data={data} />
})