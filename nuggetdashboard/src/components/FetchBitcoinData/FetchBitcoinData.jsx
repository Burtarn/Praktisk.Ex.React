import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner'
import { fetchBitcoinData, selectBitcoinData, selectLoading, selectError } from '../../store/apiBitcoinSlice';
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

const FetchBitcoinData = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectBitcoinData);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);


    useEffect(() => {
        dispatch(fetchBitcoinData());
    }, [dispatch]);

    if (loading) return < Spinner />;
    if (error) return <p>{error}</p>;
    if (!data || Object.keys(data).length === 0) return <p>Inga data att visa</p>;

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Bitcoin (USD)',
                data: Object.values(data),
                backgroundColor: 'rgba(0, 123, 255, 0.6)', // Blå staplar
                borderColor: 'rgba(0, 123, 255, 1)', // Blå kanter
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

export default FetchBitcoinData;