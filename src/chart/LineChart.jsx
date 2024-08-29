import React from "react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const LineGraph = React.memo(({ visitorsList }) => {
    const monthLabels = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const datasets = []
    const years = Object.keys(visitorsList)

    for (let i of years) {
        function generateRandomColor(baseHue) {
            const hue = (baseHue + Math.floor(Math.random() * 50)) % 360;
            const saturation = '80%';
            const lightness = '60%';
            return `hsl(${hue}, ${saturation}, ${lightness})`;
        }
        const baseHue = Math.floor(Math.random() * 360);
        let yearsCount = visitorsList[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        datasets.push({
            borderWidth: 1,
            data: visitorsList[i],
            label: `${i} Years (${yearsCount})`,
            borderColor: generateRandomColor(baseHue),
            backgroundColor: generateRandomColor(baseHue),
        })
    }

    const data = {
        datasets,
        labels: monthLabels,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
    return <Line options={options} data={data} />
})