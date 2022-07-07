import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { SUBMIT_PROFESSIONAL } from '../actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    const { professionalDispatch } = this.props;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Link to="/formdisplay">
          <Button
            label="enviar"
            onClick={ () => professionalDispatch(this.state) }
          />
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  professionalDispatch: (payload) => dispatch(SUBMIT_PROFESSIONAL(payload)),
});

ProfessionalForm.propTypes = {
  professionalDispatch: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
