import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      curriculo,
      cargo,
      descricao,
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { nome }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.personalReducer.nome,
  email: state.personalReducer.email,
  cpf: state.personalReducer.cpf,
  endereco: state.personalReducer.endereco,
  cidade: state.personalReducer.cidade,
  estado: state.personalReducer.estado,
  curriculo: state.professionalReducer.curriculo,
  cargo: state.professionalReducer.cargo,
  descricao: state.professionalReducer.descricao,
});

FormDataDisplay.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  curriculo: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(FormDataDisplay);
