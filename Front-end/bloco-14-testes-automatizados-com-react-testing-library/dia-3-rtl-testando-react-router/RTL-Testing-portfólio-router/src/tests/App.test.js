import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando meu portifólio', () => {
  test('renders learn react link', () => {
    const { getByText } = renderWithRouter(<App />);
    const linkElement = getByText(/portifólio/i);

    expect(linkElement).toBeInTheDocument();
  });
  test('Testa se os textos aparecem ao clicar na rota correta', () => {
    renderWithRouter(<App />);

    const links = screen.getAllByRole('link');

    links.forEach((link) => {
      userEvent.click(link);

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(link.innerHTML);
    });
  });

  test('Testa se ao clicar em um link, redireciona a url correto', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByText(/Sobre Mim/i);

    userEvent.click(link);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testa que ao clicar em um componente, o texto que estavarenderizado some',
    () => {
      renderWithRouter(<App />);
      const home = screen.getByTestId('home');
      expect(home).toBeInTheDocument();

      const contacts = screen.getByRole('link', { name: /contatos/i });
      expect(contacts).toBeInTheDocument();

      userEvent.click(contacts);

      expect(home).not.toBeInTheDocument();
    });
});
