import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';

describe('Loader', () => {
  it('renders app component', () => {
    const mocks = []
    render(<MockedProvider mocks={mocks} addTypename={false}><App /></MockedProvider>);
    const element = screen.getByTestId('app');
    expect(element).toBeInTheDocument();
  })
})
