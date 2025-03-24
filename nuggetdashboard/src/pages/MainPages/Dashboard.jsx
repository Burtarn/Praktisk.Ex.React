import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSavings, toggleComplete } from '../../store/bitcoinSlice';
import '../../styles/Dashboard.css';
import BitcoinSavingsChart from '../../components/charts/BitCoinSavingChart'
import BitcoinSavingsPieChart from '../../components/charts/BitCoinPieChart'


const Dashboard = () => {
    const dispatch = useDispatch();
    const bitcoinSavings = useSelector((state) => state.bitcoinSavings.savings);
    const completed = useSelector((state) => state.bitcoinSavings.completed);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleRemoveSavings = () => {
        if (selectedIndex !== null) {
            dispatch(removeSavings(selectedIndex));
            setIsModalOpen(false);
        }
    };

    const handleToggleComplete = (index) => {
        dispatch(toggleComplete(index));
    };

    const filteredSavings = bitcoinSavings.filter(sparmål =>
        sparmål.mål.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard-container">
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
                                            onClick={() => {
                                                setSelectedIndex(index);
                                                setIsModalOpen(true);
                                            }} 
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
                                <p>Dags att sätta upp några mål och börja spara!</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Bekräfta borttagning</h2>
                        <p>Är du säker på att du vill ta bort detta sparmål?</p>
                        <div className="modal-buttons">
                            <button onClick={handleRemoveSavings} className="btn btn-confirm">Ja, ta bort</button>
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-cancel">Avbryt</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );
};

export default Dashboard;

