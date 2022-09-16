import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
    it('renders loader component', () => {
        render(<Loader />);
        const element = screen.getByTestId('loader');
        expect(element).toBeInTheDocument();
    })
})
