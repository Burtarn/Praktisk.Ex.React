import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSavings } from '../store/bitcoinSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const bitcoinSavings = useSelector((state) => state.bitcoinSavings.savings);

    const handleRemoveSavings = (index) => {
        dispatch(removeSavings(index)); 
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 text-center">Dashboard</h1>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center mt-5 mb-5">
                <h1 className="text-1xl font-bold text-gray-800 text-center">Sparmål</h1>
                {bitcoinSavings.length > 0 ? (
                    bitcoinSavings.map((sparmål, index) => (
                        <div key={sparmål.id} className="border p-4 rounded-lg mt-4 bg-gray-50 shadow-sm">
                            <p className="text-lg text-gray-600">
                                Ditt totala Bitcoin-sparande: <span className="font-bold">{Math.round(sparmål.framtidaVärde).toLocaleString()} SEK</span>
                            </p>
                            <p className="text-lg text-gray-600">Startbelopp: <span className="font-bold">{sparmål.startbelopp.toLocaleString()} SEK</span></p>
                            <p className="text-lg text-gray-600">Månadsinsättning: <span className="font-bold">{sparmål.månadsinsättning.toLocaleString()} SEK</span></p>
                            <p className="text-lg text-gray-600">Sparperiod: <span className="font-bold">{sparmål.år} År</span></p>
                            <p className="text-lg text-gray-600">Mål: <span className="font-bold">{sparmål.mål}</span></p>
                            <button 
                                onClick={() => handleRemoveSavings(index)} 
                                className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                            >
                                Ta bort
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-lg text-gray-600 mt-4">Inga sparmål registrerade.</p>
                )}
            </div>
        </>
    );
};

export default Dashboard;