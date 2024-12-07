import { getAccounts } from './api';
import Savings from './Savings';
import Mortgage from './Mortgage';
import styled, { css } from 'styled-components';


import React, { useState, useEffect } from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
`;

const StyledTab = styled(Tab)<{ isSelected: boolean }>`
  padding: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: 1.2rem;
  
  ${(props) =>
    props.isSelected &&
    css`
      color: #007bff;
      border-bottom-color: #007bff;
    `}
`;

const AccountDetail = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #ccc;
`;

const AccountSummary: React.FC = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [mortgage, setMortgage] = useState<any>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await getAccounts();
      setAccounts(response.data);
      setMortgage(response.data.find((account: any) => account.account_type === 'mortgage'));
    };
    fetchAccounts();
  }, []);

  return (
    <Container>
      <Tabs index={selectedTab} onChange={setSelectedTab}>
        <StyledTabList>
          <StyledTab isSelected={selectedTab === 0}>Savings Accounts</StyledTab>
          <StyledTab isSelected={selectedTab === 1}>Mortgage Account</StyledTab>
        </StyledTabList>
        <TabPanels>
          <TabPanel>
          <h2>Account Details</h2>
            {accounts
              .filter((account: any) => account.account_type === 'savings')
              .map((account: any) => (
                <AccountDetail key={account.account_id}>
                  <Savings account={account} />
                </AccountDetail>
              ))}
          </TabPanel>
          <TabPanel>
            {mortgage ? <Mortgage mortgage={mortgage} /> : <p>No Mortgage Account</p>}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default AccountSummary;
