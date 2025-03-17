import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import HeroVideo from '../components/Herovideo/HeroVideo';
import BitCoinCalcForm from '../components/Savecalculator/BitcoinCalcForm';
import SaveCalcForm from '../components/Savecalculator/IndexCalcForm';

function ProductPage() {
    return (
        <div>
            < BitCoinCalcForm />
            < SaveCalcForm / >
            <nav className="mb-4">
                <Link to="bitcoin" className="text-blue-500 hover:underline mr-4">Bitcoin Kalkylator</Link>
                <Link to="save-calc" className="text-blue-500 hover:underline">Spar Kalkylator</Link>
            </nav>
            <Outlet /> 
        </div>
    );
}

export default ProductPage;