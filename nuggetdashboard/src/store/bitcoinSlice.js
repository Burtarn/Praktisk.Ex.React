import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savings: JSON.parse(localStorage.getItem("bitcoinSavings")) || [],
    completed: [],
};

const BitcoinSavingSlice = createSlice({
    name: 'bitcoinSavings',
    initialState,
    reducers: {
        bitcoinGrowth: (state, action) => {
            state.savings.push(action.payload);
            localStorage.setItem("bitcoinSavings", JSON.stringify(state.savings));
        },
        removeSavings: (state, action) => {
            state.savings.splice(action.payload, 1);
            localStorage.setItem("bitcoinSavings", JSON.stringify(state.savings));
        },
        toggleComplete(state, action) {
            const index = action.payload;
            state.completed[index] = !state.completed[index]; 
        },
    },
});

export const { bitcoinGrowth, removeSavings, toggleComplete } = BitcoinSavingSlice.actions;
export default BitcoinSavingSlice.reducer;