import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the Firebase URL
const FIREBASE_URL = "https://react-redux-3127c-default-rtdb.firebaseio.com/customers.json";

// Async thunk for login
export const login = createAsyncThunk("auth/login",
  async ({ customerId, password }, { rejectWithValue }) => {
    try {
      // Fetch customers from Firebase
      const response = await fetch(FIREBASE_URL);

      if (!response.ok) {
        throw new Error("Failed to connect to Firebase.");
      }

      const customers = await response.json();

      // Check if customer exists with valid credentials
      const customer = Object.values(customers).find(
        (cust) => cust.id === customerId && cust.password === btoa(password) // Password is stored as base64
      );

      if (customer) {
        return { customerId: customer.id, name: customer.name };
      } else {
        throw new Error("Invalid Customer ID or Password.");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    is_logged_in: false, // Authentication status
    user: null, // Stores logged-in user information
    error: null, // Stores login errors
  },
  reducers: {
    logout(state) {
      state.is_logged_in = false;
      state.user = null;
      state.error = null;
    },
    clearAuthError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.is_logged_in = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.is_logged_in = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions; // Export actions for dispatch
export const selectIsLoggedIn = (state) => state.auth.is_logged_in; // Selector for authentication status
export const selectUser = (state) => state.auth.user; // Selector for user information
export const selectAuthError = (state) => state.auth.error; // Selector for error messages

export default authSlice.reducer; // Export the reducer for the store
