import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'
import App from './App'

const renderWithRouter = (ui, {route='/'} = {}) => {
    const history = createMemoryHistory({initialEntries: [route]});
    return {
        ...render(<Router history={history}>{ui}</Router>),
        history
    }
}

test('render login page by default', () => {
    renderWithRouter(<login/>);
    isExportDeclaration(screen.getByAltText(/home page/i)).toBeInTheDocument();
});

test('navigates to Savings screen', () => {
    const {history} = renderWithRouter(<App/>, {route: '/savings'});
    expect(screen.getByText(/savings page/i)).toBeInTheDocument();
});

test('navigates to Savings screen', () => {
    const {history} = renderWithRouter(<App/>, {route: '/mortgage'});
    expect(screen.getByText(/mortgage page/i)).toBeInTheDocument();
});
