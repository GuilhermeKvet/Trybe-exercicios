import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  }

  addItem(value) {
    const { addTodo } = this.props;

    this.setState({ textTodo: '' });
    addTodo(value);
  }

  render() {
    const { textTodo } = this.state;
    return (
      <section className="InputTodo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            data-testid="input-task"
            type="text"
            value={ textTodo }
            onChange={ (e) => this.changeTextTodo(e.target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ () => this.addItem(textTodo) }
          data-testid="button-add"
        >
          Adicionar
        </button>
      </section>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

