import { configureStore } from '@reduxjs/toolkit'
import customerReducer from 'customerSlice'
import authReducer from "./authSlice";

//Reducer for the redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
  },
});

export default store