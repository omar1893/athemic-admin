<template>
    <div>
        <Line :data="data" :options="options" />
    </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Filler
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler)

const data = {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'],
    datasets: [
        {
            label: 'Ventas ($)',
            data: [450, 380, 600, 520, 700],
            fill: true,
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) return null; // Previene error en el render inicial

                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, 'rgba(135, 94, 248, 0)');    // Morado transparente abajo
                gradient.addColorStop(0.3, 'rgba(135, 94, 248, 0.12)'); // Más opaco en medio
                gradient.addColorStop(1, 'rgba(135, 94, 248, 0.21)');   // Más opaco arriba

                return gradient;
            },
            tension: 0.3,
            pointBackgroundColor: '#875EF8'
        }
    ]
}

const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: { callback: (v) => v + '$' }
        }
    }
}
</script>