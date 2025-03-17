import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import HeroVideo from '../components/Herovideo/HeroVideo';
import BitCoinCalcForm from '../components/Savecalculator/BitcoinCalcForm';
import SaveCalcForm from '../components/Savecalculator/IndexCalcForm';

function ProductPage() {
    return (
        <div>
            < BitCoinCalcForm />

            <Outlet /> 
        </div>
    );
}

export default ProductPage;