import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Mortgage: React.FC<{ mortgage: any }> = ({ mortgage }) => {
  return (
    <Container>
      <h2>Mortgage Details</h2>
      <p><strong>Mortgage Account Number:</strong> {mortgage.mortgage_id}</p>
      <p><strong>Account Type:</strong> {mortgage.account_type}</p>
      <p><strong>Available Balance:</strong> ${mortgage.balance}</p>
      <p><strong>Last Transaction Date:</strong> {mortgage.last_transaction_date}</p>
      <p><strong>Mortgage Type:</strong> {mortgage.mortgage_type}</p>
      <p><strong>Property Cost:</strong> ${mortgage.property_cost}</p>
      <p><strong>Deposit Amount:</strong> ${mortgage.deposit_amount}</p>
    </Container>
  );
};

export default Mortgage;
