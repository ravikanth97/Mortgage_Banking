import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AccountSummary from "./pages/AccountSummary";
import { logout } from "./store/authSlice"; // Import auth actions

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.is_logged_in); // Access auth state
  const dispatch = useDispatch();

  // Route loader for authentication
  const authLoader = async () => {
    if (!isLoggedIn) {
      return redirect("/"); // Redirect to login if not logged in
    }
    return null; // Allow access if logged in
  };

  // Route configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout isLoggedIn={isLoggedIn} onLogout={() => dispatch(logout())} />,
      children: [
        {
          index: true,
          element: <Login />,
          loader: async () => (isLoggedIn ? redirect("/dashboard") : null),
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          loader: authLoader,
        },
        {
          path: "account-summary",
          element: <AccountSummary />,
          loader: authLoader,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;