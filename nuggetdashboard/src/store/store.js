import {  configureStore }
from '@reduxjs/toolkit';
import indexSavingSlice from "./indexSlice"
import bitcoinSavingSlice from "./bitcoinSlice"
import bitcoinReducer from './apiBitcoinSlice';



const store = configureStore({
  reducer: {
    savings: indexSavingSlice,
    bitcoinSavings: bitcoinSavingSlice,
    bitcoin: bitcoinReducer,

  },

});

export default store;
