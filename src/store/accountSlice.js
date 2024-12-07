import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the Firebase URL
const FIREBASE_URL = "https://react-redux-3127c-default-rtdb.firebaseio.com/accounts.json";

// Async thunk to fetch accounts
export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await fetch(FIREBASE_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch accounts.");
      }

      const accounts = await response.json();

      // Filter accounts by the logged-in user's ID
      return Object.values(accounts).filter(account => account.customer_id === customerId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the slice
const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAccounts.pending, state => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accounts = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Selectors
export const selectAccounts = state => state.accounts.accounts;
export const selectAccountsLoading = state => state.accounts.status === "loading";
export const selectAccountsError = state => state.accounts.error;
export const selectAccountStatus = state => state.accounts.status; // Add this selector

export default accountSlice.reducer;