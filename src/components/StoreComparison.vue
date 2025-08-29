<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
    labels: ['Tienda del Sol', 'Tienda Estrella', 'Tienda Luna'],
    datasets: [
        {
            label: 'Ventas en €',
            data: [1000, 500, 250],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderRadius: 5
        }
    ]
}

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
    },
    scales: {
        x: {
            grid: {
                display: false, // Oculta las líneas verticales entre barras
                drawBorder: true // Muestra solo la línea del eje X
            }
        },
        y: {
            grid: {
                display: false, // Oculta las líneas horizontales de valores
                drawBorder: true // Muestra solo la línea del eje Y
            },
            beginAtZero: true,
            title: { display: true, text: '' },
            ticks: { callback: value => value + '€' }
        }
    }
}
</script>

<template>
    <div class="w-full">
        <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>
