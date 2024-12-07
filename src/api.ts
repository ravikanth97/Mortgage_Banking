import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001',
});

export const getAccounts = () => api.get('/accounts');
export const createMortgage = (data: any) => api.post('/mortgages', data);
