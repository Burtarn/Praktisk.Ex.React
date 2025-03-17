import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savings: [],
};

const BitcoinSavingSlice = createSlice({
    name: 'bitcoinSavings',
    initialState,
    reducers: {
        bitcoinGrowth: (state, action) => {
          state.savings.push(action.payload);
        },
        removeSavings: (state, action) => {
          state.savings.splice(action.payload, 1);
      },
    },
});

export const { bitcoinGrowth, removeSavings } = BitcoinSavingSlice.actions;
export default BitcoinSavingSlice.reducer;