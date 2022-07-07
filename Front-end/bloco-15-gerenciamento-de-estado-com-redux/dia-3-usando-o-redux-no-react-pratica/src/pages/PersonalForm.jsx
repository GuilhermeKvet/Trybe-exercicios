import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { SUBMIT_PERSONAL } from '../actions';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const { personalDispatch } = this.props;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Link to="professionalform">
          <Button
            type="button"
            label="Enviar"
            onClick={ () => personalDispatch(this.state) }
          />
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  personalDispatch: (payload) => dispatch(SUBMIT_PERSONAL(payload)),
});

PersonalForm.propTypes = {
  personalDispatch: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PersonalForm);
