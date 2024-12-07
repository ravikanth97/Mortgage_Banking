import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App'; // Your main App component

test('renders home page on default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('renders about page on /savings route', () => {
  render(
    <MemoryRouter initialEntries={['/savings']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/savings page/i)).toBeInTheDocument();
});

test('renders about page on /mortgage route', () => {
  render(
    <MemoryRouter initialEntries={['/mortgage']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/mortgage page/i)).toBeInTheDocument();
});


test('renders not found page on invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-route']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});
