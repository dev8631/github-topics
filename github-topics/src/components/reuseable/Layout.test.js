import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout';


const renderWithRouter = async (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        ...render(ui, { wrapper: BrowserRouter }),
    }
}
describe('Layout', () => {
    it("Should render layout component", () => {
        renderWithRouter(<Layout />);

        expect(screen.getByTestId('layout-component')).toBeTruthy()
    });
})