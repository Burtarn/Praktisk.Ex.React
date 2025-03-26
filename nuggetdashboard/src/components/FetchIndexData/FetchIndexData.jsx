import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FetchIndexData = () => {
    const URL = 'http://localhost:5000/omx30'; 

    const [indexdata, setIndexdata] = useState({});   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchIndexData() {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Nätverksfel');
                }
                const data = await response.json();
                setIndexdata(data);
            } catch (error) {
                setError('Något gick fel');
            } finally {
                setLoading(false);
            }
        }
        fetchIndexData();
    }, []);

    if (loading) {
        return < Spinner />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const chartData = {
        labels: Object.keys(indexdata),
        datasets: [
            {
                label: 'OMX30',
                data: Object.values(indexdata),
                backgroundColor: 'rgba(255, 0, 0, 0.6)', // Röda staplar
                borderColor: 'rgba(255, 0, 0, 1)', // Röda kanter
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: false,
                barPercentage: 0.5, 
                categoryPercentage: 0.5, 
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: '90%', maxWidth: '600px', margin: '0 auto' }}> 
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default FetchIndexData;