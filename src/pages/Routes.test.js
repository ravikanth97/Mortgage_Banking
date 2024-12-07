
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'
import App from './App'

import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { login } from "../store/authSlice";
import * as authSlice from "../store/authSlice";
import Login from "./Login";

// Mock the login action
//jest.spyOn(authSlice, "login").mockImplementation(jest.fn());

describe("Error Component", () => {

    const renderWithRouter = (ui, {route='/'} = {}) => {
        const history = createMemoryHistory({initialEntries: [route]});
        return {
            ...render(<Router history={history}>{ui}</Router>),
            history
        }
    }
    
    test('render login page by default', () => {
        renderWithRouter(<Login/>);
        isExportDeclaration(screen.getByAltText(/home page/i)).toBeInTheDocument();
    });
    
    test('navigates to Error screen', () => {
        const {history} = renderWithRouter(<App/>, {route: '/error'});
        expect(screen.getByText(/Error page/i)).toBeInTheDocument();
    });

    // test('navigates to Savings screen', () => {
    //     const {history} = renderWithRouter(<App/>, {route: '/mortgage'});
    //     expect(screen.getByText(/mortgage page/i)).toBeInTheDocument();
    // });

});