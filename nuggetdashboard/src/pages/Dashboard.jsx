import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSavings, toggleComplete } from '../store/bitcoinSlice';
import '../styles/Dashboard.css'; // Importera CSS-filen

const Dashboard = () => {
    const dispatch = useDispatch();
    const bitcoinSavings = useSelector((state) => state.bitcoinSavings.savings);
    const completed = useSelector((state) => state.bitcoinSavings.completed);
    const [searchTerm, setSearchTerm] = useState('');

    const handleRemoveSavings = (index) => {
        dispatch(removeSavings(index)); 
    };

    const handleToggleComplete = (index) => {
        dispatch(toggleComplete(index)); 
    };

    const filteredSavings = bitcoinSavings.filter(sparmål =>
        sparmål.mål.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <header className="header">
                <h1 className="title">Dashboard</h1>
            </header>
            <main className="main-content">
                <input
                    type="text"
                    placeholder="Sök efter mål..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <div className="savings-container">
                    <h2 className="section-title">Sparmål</h2>
                    <div className="savings-grid">
                        {filteredSavings.length > 0 ? (
                            filteredSavings.map((sparmål, index) => (
                                <div key={sparmål.id} className="savings-card">
                                    <p className={`savings-info ${completed[index] ? 'completed' : ''}`}>
                                        Ditt totala sparmål: <span className="amount">{Math.round(sparmål.framtidaVärde).toLocaleString()} SEK</span>
                                    </p>
                                    <p className={`savings-info ${completed[index] ? 'completed' : ''}`}>Startbelopp: <span className="amount">{sparmål.startbelopp.toLocaleString()} SEK</span></p>
                                    <p className={`savings-info ${completed[index] ? 'completed' : ''}`}>Månadsinsättning: <span className="amount">{sparmål.månadsinsättning.toLocaleString()} SEK</span></p>
                                    <p className={`savings-info ${completed[index] ? 'completed' : ''}`}>Sparperiod: <span className="amount">{sparmål.år} År</span></p>
                                    <p className={`savings-info ${completed[index] ? 'completed' : ''}`}>Mål: <span className="amount">{sparmål.mål}</span></p>
                                    <div className="button-container">
                                        <button 
                                            onClick={() => handleToggleComplete(index)} 
                                            className="btn btn-complete"
                                        >
                                            Klar
                                        </button>
                                        <button 
                                            onClick={() => handleRemoveSavings(index)} 
                                            className="btn btn-remove"
                                        >
                                            Ta bort
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-goals">
                                <p>Inga sparmål registrerade!</p>
                                <p>Det ser ut som om du är på en sparmålsjakt, men hitills har du inte hittat något!</p>
                                <p> Dags att sätta upp några mål och börja spara!</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
