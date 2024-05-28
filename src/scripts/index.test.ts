import { screen, } from '@testing-library/dom';

describe('Home', () => {
    it('should render title page', () => {
        document.body
        document.body.innerHTML = `
            <h1>Título da Página</h1>
        `;

        const h1 = screen.queryByText('Título da Página');
        expect(h1).toBeInTheDocument();
    });
});