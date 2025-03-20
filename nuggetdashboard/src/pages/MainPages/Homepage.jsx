import React from 'react';
import HeroVideo from "../../components/Herovideo/HeroVideo";
import CircularText from "../../components/RotatingText/CircularText";
import FetchBitcoinData from '../../components/FetchBitcoinData/FetchBitcoinData';
import FetchIndexData from '../../components/FetchIndexData/FetchIndexData';

function HomePage() {
  return (
    <div>
      <HeroVideo />
      <section className="mt-5">
        <CircularText text="Bitcoin" />
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px', margin: '20px 10px 20px 10px' }}> 
          <FetchBitcoinData />
        </div>
        <div style={{ flex: '1 1 400px', margin: '20px 10px 20px 10px' }}> 
          <FetchIndexData />
        </div>
      </section>
    </div>
  );
}

export default HomePage;