import React, { useContext } from 'react';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import ProfileSection from '../../components/ProfileSettings/ProfileSection';
import { AuthContext } from '../../context/AuthContext';
import BitcoinSavingsChart from '../../components/charts/BitCoinSavingChart'
import BitcoinSavingsPieChart from '../../components/charts/BitCoinPieChart'

const Profile = () => {
    const { logout } = useContext(AuthContext);
    
    return (
        <>
            <div className="profile-header">
                <h2 className="text-2xl font-bold mb-2">Min Profil</h2>
                <p className="text-lg">Välkommen till din profil!</p>
            </div>
            <div className="theme-toggle-container mb-4">
                <ThemeToggle />
            </div>
            <section>
                <ProfileSection />
            </section>
            <section>
            < BitcoinSavingsChart />
            < BitcoinSavingsPieChart />
            </section>
            <div className="mt-4">
                <button 
                    onClick={logout} 
                    className="w-20px py-2 px-4 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300"
                >
                    Logga ut
                </button>
            </div>
        </>
    );
};

export default Profile;