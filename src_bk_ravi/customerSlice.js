import { createSlice } from "@reduxjs/toolkit";

//Create Slice for accessing redux store through out the application, test
const initialState = {
  customerDetails: [],
  savings: { balance: 0, remarks: "" },
  mortgage: { outstanding: 0, remarks: "" },
};

const customerSlice = createSlice({
  name: "customer",
  initialState: [],
  reducers: {
    setSavings(state, action) {
      state.savings = action.payload;
    },
    setMortgage(state, action) {
      state.mortgage = action.payload;
    },
  },
});

export const { setSavings, setMortgage } = customerSlice.actions;
export default customerSlice.reducer;
