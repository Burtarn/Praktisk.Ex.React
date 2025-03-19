import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BitcoinSavingsChart = () => {
    const savings = useSelector(state => state.bitcoinSavings.savings);
    const chartRef = useRef();
    const chartInstanceRef = useRef(null);

    useEffect(() => {

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: savings.map((saving, index) => `Mål ${index + 1} (${saving.mål})`),
                datasets: [{
                    label: 'Framtida Värde',
                    data: savings.map(saving => saving.framtidaVärde),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 205, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(201, 203, 207, 0.6)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1,
                }],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Framtida Värde (SEK)'
                        }
                    },
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => {
                                return `${tooltipItem.label}: ${tooltipItem.raw} SEK`;
                            },
                        },
                    },
                },
            },
        });
        
        // Rensa upp diagrammet vid avmontering
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [savings]);

    return (
        <div>
            <h2 className='text-center
'>Bitcoin Sparmål Diagram</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default BitcoinSavingsChart;