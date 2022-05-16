import React from "react";
import "./App.css";
import estados from "./data";

const INITIAL_STATE = {
  name: "",
  email: "",
  cpf: 0,
  address: "",
  city: "",
  state: "",
  type: false,
  resume: "",
  role: "",
  roleDescription: "",
  submited: false,
};
class App extends React.Component {
  state = INITIAL_STATE;

  validateAdress = (address) => address.replace(/[^\w\s]/gi, "");

  handlerBlur = (event) => {
    let { name, value } = event.target;
    if (name === "city") value = value.match(/^\d/) ? "" : value;
    this.updateState(name, value);
  };

  handlerChange = (event) => {
    let { name, value } = event.target;
    if (name === "name") value = value.toUpperCase();
    if (name === "address") value = this.validateAdress(value);
    this.updateState(name, value);
  };

  handleSaveButton = () => {
    this.setState({ submited: true });
  };

  handleDelButton = () => {
    this.setState(INITIAL_STATE);
  }

  updateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      type,
      resume,
      role,
      roleDescription,
      submited,
    } = this.state;
    return (
      <div>
        <fieldset>
          <form>
            <label htmlFor="inputName">
              Nome:
              <input
                type="text"
                id="inputName"
                name="name"
                value={name}
                onChange={this.handlerChange}
                maxLength="40"
                required
              />
            </label>
            <br />
            <label htmlFor="inputEmail">
              Email:
              <input
                type="email"
                id="inputEmail"
                name="email"
                value={email}
                onChange={this.handlerChange}
                maxLength="50"
                required
              />
            </label>
            <br />
            <label htmlFor="cpfInput">
              CPF:
              <input
                type="text"
                id="cpfInput"
                name="cpf"
                value={cpf}
                onChange={this.handlerChange}
                maxLength="11"
                required
              />
            </label>
            <br />
            <label htmlFor="inputAddress">
              Address:
              <input
                type="text"
                id="inputAddress"
                name="address"
                value={address}
                onChange={this.handlerChange}
                maxLength="200"
                required
              />
            </label>
            <br />
            <label htmlFor="inputCity">
              City:
              <input
                type="text"
                id="inputCity"
                name="city"
                value={city}
                onBlur={this.handlerBlur}
                onChange={this.handlerChange}
                maxLength="28"
                required
              />
            </label>
            <br />
            <label>
              State:
              <select
                name="state"
                value={state}
                onChange={this.handlerChange}
                required
              >
                {estados.map((estado) => (
                  <option key={estado.nome}>{estado.nome}</option>
                ))}
              </select>
            </label>
            <br />
            <label htmlFor="house">
              Casa:
              <input
                type="radio"
                id="inputRadio"
                name="radio"
                value={type}
                onChange={this.handlerChange}
                required
              />
            </label>
            <label htmlFor="apart">
              Apartament:
              <input
                type="radio"
                id="apart"
                name="radio"
                value={type}
                onChange={this.handlerChange}
                required
              />
            </label>
          </form>
        </fieldset>
        <fieldset>
          <label htmlFor="abstract">
            Resumo do Currículo:
            <input
              id="abstract"
              type="text"
              name="resume"
              maxLength="1000"
              onChange={this.handlerChange}
              required
            />
          </label>
          <br />
          <label>
            Cargo:
            <textarea
              type="text"
              name="role"
              maxLength="40"
              onChange={this.handlerChange}
              onMouseUp={() => {
                alert("Preencha com cuidado esta informação.");
              }}
              required
            />
          </label>
          <br />
          <label htmlFor="roleDescription">
            Descrição do cargo:
            <input
              maxLength="500"
              id="roleDescription"
              name="roleDescription"
              required
            />
          </label>
          <br />
        </fieldset>
        <button type="button" onClick={this.handleSaveButton}>
          Salvar
        </button>
        {submited && (
          <div>
            <h2>Dados enviados</h2>
            <h3>Pessoal</h3>
            <div> Name: {name}</div>
            <div> Email: {email}</div>
            <div> CPF: {cpf}</div>
            <div> Endereço: {address}</div>
            <div> Cidade: {city}</div>
            <div> Estado: {state}</div>
            <div> Tipo de residência: {type}</div>
            <h3>Profissional</h3>
            <div> Currículo: {resume}</div>
            <div> Cargo: {role}</div>
            <div> Descrição do cargo: {roleDescription}</div>
          </div>
        )}
        <button type="button" onClick={this.handleDelButton}>
          Limpar
        </button>
      </div>
    );
  }
}

export default App;
