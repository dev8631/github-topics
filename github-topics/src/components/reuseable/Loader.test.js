import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders loader component', () => {
    render(<Loader />);
    const element = screen.getByTestId('loader');
    expect(element).toBeInTheDocument();
});
