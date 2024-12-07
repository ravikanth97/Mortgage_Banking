import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from 'accountsSlice'

//Reducer for the redux store
const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});

export default store