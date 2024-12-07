import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';

useEffect(() => {
    fetch("")
})

const initialState = {
    customerDetails: customerData,
    savings: {balance: 0, remarks: ''},
    mortgage: {outstanding: 0, remarks: ''}
}

const accountSlice = createSlice({
name: 'accounts',
initialState: [],
reducers: {
    setSavings(state, action) {
    state.savings = action.payload;
    },
    setMortgage(state, action) {
    state.mortgage = action.payload;
    }
}
})

export const {setSavings, setMortgage} = accountSlice.actions;
export default accountSlice.reducer;

