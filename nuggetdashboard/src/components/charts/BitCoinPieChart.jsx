import React from 'react';
import { useSelector } from 'react-redux';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BitcoinSavingsPieChart = () => {
    const savings = useSelector(state => state.bitcoinSavings.savings);
    
    const monthlyContributions = savings.map(saving => saving.månadsinsättning);
    const contributionCounts = {};
    monthlyContributions.forEach(amount => {
        contributionCounts[amount] = (contributionCounts[amount] || 0) + 1;
    });

    const labels = Object.keys(contributionCounts);
    const data = Object.values(contributionCounts);

    const chartRef = React.useRef();

    React.useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Månadsinsättningar',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 205, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(201, 203, 207, 0.6)',
                    ],
                }],
            },
            options: {
                responsive: false, 
                maintainAspectRatio: false, 
            },
        });

        return () => {
            if (chartRef.current) {
                chartInstance.destroy();
            }
        };
    }, [savings]);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-center text-lg font-bold">Dina Månadsinsättningar</h2>
            <canvas ref={chartRef} style={{ width: '250px', height: '250px' }}></canvas>
        </div>
    );
};

export default BitcoinSavingsPieChart;