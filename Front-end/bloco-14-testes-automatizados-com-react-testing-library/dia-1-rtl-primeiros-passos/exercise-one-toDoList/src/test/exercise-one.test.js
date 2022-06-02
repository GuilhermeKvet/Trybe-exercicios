import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  const addButton = 'add-button';
  test('Verifica se existe um botão para adicionar a tarefa', () => {
    render(<App />);
    const button = screen.getByTestId(addButton);
    expect(button).toBeInTheDocument();
  });
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByTestId(addButton);
    expect(button).toHaveTextContent('Adicionar');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByTestId(addButton);

    const USER_TASK = 'Trabalhar';
    userEvent.type(inputTask, USER_TASK);
    userEvent.type(button);

    const task = screen.getByTestId('task');
    expect(inputTask).toHaveTextContent('');
    expect(task).toHaveTextContent(USER_TASK);
  });
});

