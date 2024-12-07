import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Savings: React.FC<{ account: any }> = ({ account }) => {
  return (
    <Container>

      <p><strong>Account Number:</strong> {account.account_id}</p>
      <p><strong>Account Type:</strong> {account.account_type}</p>
      <p><strong>Available Balance:</strong> ${account.balance}</p>
      <p><strong>Last Transaction Date:</strong> {account.last_transaction_date}</p>
    </Container>
  );
};

export default Savings;
