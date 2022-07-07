const initialState = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = initialState, action) => {
  if (action.type === 'SUBMIT_PROFESSIONAL') {
    return {
      ...state,
      curriculo: action.professionalForm.curriculo,
      cargo: action.professionalForm.cargo,
      descricao: action.professionalForm.descricao,
    };
  }
  return state;
};

export default professionalReducer;
