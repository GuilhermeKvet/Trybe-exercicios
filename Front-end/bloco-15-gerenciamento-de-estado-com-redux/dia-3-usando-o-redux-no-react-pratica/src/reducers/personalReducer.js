const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalReducer = (state = initialState, action) => {
  if (action.type === 'SUBMIT_PERSONAL') {
    return {
      ...state,
      nome: action.personalForm.nome,
      email: action.personalForm.email,
      cpf: action.personalForm.cpf,
      endereco: action.personalForm.endereco,
      cidade: action.personalForm.cidade,
      estado: action.personalForm.estado,
    };
  }
  return state;
};

export default personalReducer;
