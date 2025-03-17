import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savings: [],
    completed: [],
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
      toggleComplete(state, action) {
        const index = action.payload;
        state.completed[index] = !state.completed[index]; 
    },
    },
});

export const { bitcoinGrowth, removeSavings, toggleComplete, } = BitcoinSavingSlice.actions;
export default BitcoinSavingSlice.reducer;