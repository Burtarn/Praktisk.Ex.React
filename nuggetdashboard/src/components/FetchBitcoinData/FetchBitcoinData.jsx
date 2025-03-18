import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBitcoinData, selectBitcoinData, selectLoading, selectError } from './bitcoinSlice';

const FetchBitcoinData = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectBitcoinData);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchBitcoinData());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <ul>
                {data.map((key, index) => (
                    <li key={index}>
                        {data[key].name}: {data[key].price} USD
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchBitcoinData;