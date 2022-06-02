import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const button = screen.getByTestId('button-add');
    const input = screen.getByTestId('input-task');
    listTodo.forEach((task, index) => {
      userEvent.type(input, task);
      userEvent.type(button);
      const taskList = screen.getAllByTestId('task');
      expect(taskList[index]).toHaveTextContent(task);
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', async () => {
    const TASK = 'Realizar CR';
    render(<Item content={ TASK } />);

    const task = screen.getByTestId('task');
    expect(task).toHaveTextContent(TASK);
  });
});

