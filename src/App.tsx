import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Savings from './Savings'
import Login from './Login'
import Mortgage from './Mortgage'
import AccountSummary from './AccountSummary'
import Transaction from './Transaction'
import Error from './Error'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="accountsummary" element={<AccountSummary/>} />
        <Route path="savings" element={<Savings/>} />
        <Route path="mortgage" element={<Mortgage/>} />
        <Route path="transaction" element={<Transaction/>} />
        <Route path="error" element={<Error/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
