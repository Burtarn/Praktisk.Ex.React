    import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

    const URL = 'http://localhost:5000/bitcoin'; 

    export const fetchBitcoinData = createAsyncThunk(
        'bitcoin/fetchBitcoinData',
        async () => {
            const response = await fetch(`${URL}`);
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Fel: ${response.status} - ${errorMessage}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data); // Logga hela datan
            return data;
        }
    );

    const bitcoinSlice = createSlice({
        name: 'bitcoin',
        initialState: {
            data: {}, 
            loading: false,
            error: null,
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchBitcoinData.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchBitcoinData.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload; // Sätt datan här
                })
                .addCase(fetchBitcoinData.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
        },
    });

    export const selectBitcoinData = (state) => state.bitcoin.data;
    export const selectLoading = (state) => state.bitcoin.loading;
    export const selectError = (state) => state.bitcoin.error;

    export default bitcoinSlice.reducer;