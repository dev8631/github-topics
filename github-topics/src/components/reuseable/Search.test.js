import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
    it("Should render input", async () => {
        render(<Search />);
        const result = await screen.findByTestId('search-input')
        expect(result).toBeInTheDocument();
    });

    it("Test input value change", async () => {
        render(<Search />);
        const input = screen.getByPlaceholderText('Type to search github topics')
        fireEvent.change(input, { target: { value: "node" } });
        await waitFor(() => {
            expect(input).toHaveValue('node');
        });
    });

    it("Test input value for empty space", async () => {
        render(<Search />);
        const input = screen.getByPlaceholderText('Type to search github topics')
        fireEvent.change(input, { target: { value: "  " } });
        await waitFor(() => {
            expect(input).toHaveValue('');
        });
    });

    // it("Test function call on value change", async () => {
    //     const handleSearch = jest.fn()
    //     render(<Search handleSearch={handleSearch} />);
    //     const input = screen.getByPlaceholderText('Type to search github topics')
    //     fireEvent.change(input, { target: { value: "node" } });
    //     await waitFor(() => {
    //         expect(handleSearch).toHaveBeenCalled()
    //     });
    // });
})

