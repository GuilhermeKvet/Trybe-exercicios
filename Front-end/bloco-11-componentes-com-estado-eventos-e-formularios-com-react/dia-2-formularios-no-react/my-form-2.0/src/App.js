import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    cpf: 0,
    address: '',
    city: '',
    state: '',
    type: false,
  }

  validateAdress = (address) => address.replace(/[^\w\s]/gi, '');

  handlerChange = (event) => {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAdress(value);
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, cpf, address, city, state, type } = this.state;
    return (
      <form>
        <label htmlFor='inputName'>Nome:
          <input type='text' id='inputName' name='name' value={name} onChange={this.handlerChange} maxLength='40' required />
        </label>
        <br />
        <label htmlFor='inputEmail'>Email:
          <input type='email' id='inputEmail' name='email' value={email} onChange={this.handlerChange} maxLength='50' required />
        </label>
        <br />
        <label htmlFor='cpfInput'>CPF:
          <input type='text' id='cpfInput' name='cpf' value={cpf} onChange={this.handlerChange} maxLength='11' required />
        </label>
        <br />
        <label htmlFor='inputAddress'>Address:
          <input type="text" id='inputAddress' name='address' value={address} onChange={this.handlerChange} maxLength='200' required />
        </label>
        <br />
        <label htmlFor='inputCity'>City:
          <input type="text" id='inputCity' name='city' value={city} onBlur={this.handlerChange} required />
        </label>
        <br />
        <label>State:
          <select name='state' value={state} required>
            <option value="" key="">Santa Catarina</option>
            <option value="" key="">Paraná</option>
            <option value="" key="">Rio Grande do Sul</option>
          </select>
        </label>
        <br/>
        <label htmlFor='inputRadio'>Tipo:
          <input type="radio" id='inputRadio' name='radio' value={type} onChange={this.handlerChange} required />
        </label>
      </form>
    );
  }
}

export default App;
