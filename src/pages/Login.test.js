import React from "react";
import thunk from "redux-thunk";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { login } from "../store/authSlice";
import * as authSlice from "../store/authSlice";
import Login from "./Login";

// Mock the login action
//jest.spyOn(authSlice, "login").mockImplementation(jest.fn());

describe("Login Component", () => {
  let store;

  // Helper function to render the component with Redux and combined reducers
  const renderWithRedux = (preloadedState) => {
    
    const rootReducer = combineReducers({
      auth: authReducer,
    });

    // Add redux-thunk middleware to handle async actions
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
    });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render the login form", () => {
    renderWithRedux({
      auth: { is_logged_in: false, user: null, error: null },
    });

    //screen.debug();

    expect(screen.getByLabelText(/customer id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("should show an error when form is submitted with empty fields", () => {
    renderWithRedux({
      auth: { is_logged_in: false, user: null, error: null },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    //screen.debug();

    expect(
      screen.getByText(/both customer id and password are required/i)
    ).toBeInTheDocument();
  });

  test("check if login is successful", async () => {
    renderWithRedux({
      auth: { is_logged_in: false, user: null, error: null },
    });
  
    fireEvent.change(screen.getByLabelText(/customer id/i), {
      target: { value: "CUST001" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });
  
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await screen.findByText(/Login successful!/i);

    const state = store.getState();
  
    //screen.debug();

    expect(state.auth.is_logged_in).toBe(true);
    expect(state.auth.user).toEqual({
      customerId: "CUST001",
      name: "John Doe", 
    });
  });
  
  test("should show an error message on invalid login", async () => {
    renderWithRedux({
      auth: { is_logged_in: false, user: null, error: null },
    });

    fireEvent.change(screen.getByLabelText(/customer id/i), {
      target: { value: "INVALID" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    //screen.debug();

    await screen.findByText(/invalid customer id or password/i);
  });
});