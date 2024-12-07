import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import {
  fetchAccounts,
  selectAccounts,
  selectAccountStatus,
} from "../store/accountSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const accounts = useSelector(selectAccounts);
  const accountStatus = useSelector(selectAccountStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.customerId) {
      dispatch(fetchAccounts(user.customerId));
    }
  }, [user, dispatch]);

  // Calculate account summary
  const accountSummary = accounts.reduce(
    (summary, account) => {
      if (account.account_type === "savings") {
        summary.balance += account.balance || 0;
      }
      else if (account.account_type === "mortgage") {
        summary.loans += account.balance || 0;
      }
      return summary;
    },
    { balance: 0, loans: 0 }
  );

  const handleViewAccountDetails = (event) => {
    navigate('/account-summary')
  }

  return (
    <div className="dashboard-container vh-70 d-flex flex-column justify-content-center align-items-center">
      <div
        className="card shadow-lg p-4 m-5"
        style={{ width: "90%", maxWidth: "650px", backgroundColor: "#f8f9fa" }}
      >
        <h2 className="text-center mb-4 text-primary">
          Welcome, <b>{user && user.name}</b>!
        </h2>

        {accountStatus === "loading" && (
          <div className="text-center text-secondary mt-4">Loading account summary...</div>
        )}

        {accountStatus === "failed" && (
          <div className="text-center text-danger mt-4">
            Failed to load account summary. Please try again.
          </div>
        )}

        {accountStatus === "succeeded" && (
          <div className="row text-center mt-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h5 className="text-secondary">Account Balance</h5>
              <p className="h4">
                ${accountSummary.balance.toLocaleString("en-US")}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h5 className="text-secondary">Oustanding Loans</h5>
              <p className={`h4 ${accountSummary.loans < 0 ? 'text-danger': 'text-suucess'}`}>
                ${accountSummary.loans.toLocaleString("en-US")}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4 text-center">
          <button className="btn btn-primary btn-lg w-100" onClick={handleViewAccountDetails}>
            View Account Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;