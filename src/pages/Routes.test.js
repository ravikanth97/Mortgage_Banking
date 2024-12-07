
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'
import App from './App'

import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { login } from "../store/authSlice";
import * as authSlice from "../store/authSlice";
import Login from "./Login";
import Error from "./Error";

describe("Error Screen Component", () => {

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
        const {history} = renderWithRouter(<Error/>, {route: '/error'});
        expect(screen.getByText(/Error page/i)).toBeInTheDocument();
    });

    // test('navigates to Savings screen', () => {
    //     const {history} = renderWithRouter(<App/>, {route: '/mortgage'});
    //     expect(screen.getByText(/mortgage page/i)).toBeInTheDocument();
    // });

});


describe("Login screen Component", () => {
    let customerStore;
    const renderWithRedux = (preloadedState) => {
      
      const rootReducer = combineReducers({
        auth: authReducer,
      });
  
      // Add redux-thunk middleware to handle async actions
      customerStore = configureStore({
        reducer: rootReducer,
        preloadedState,
      });
  
      render(
        <Provider store={customerStore}>
          <Login />
        </Provider>
      );
    };
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test("User should see the login form", () => {
      renderWithRedux({
        auth: { is_logged_in: false, user: null, error: null },
      });

      expect(screen.getByLabelText(/userId/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/pswd/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /loginBtn/i })).toBeInTheDocument();
    });
  });