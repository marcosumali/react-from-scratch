let initialState = {
  name: '',
  tower: '',
  unit: '',
  email: '',
  whatsapp: '',
}

const userData = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return ({
        ...state,
        name: action.payload,
      })
    case 'SET_USER_TOWER':
      return ({
        ...state,
        tower: action.payload,
      })
    case 'SET_USER_UNIT':
      return ({
        ...state,
        unit: action.payload,
      })
    case 'SET_USER_EMAIL':
      return ({
        ...state,
        email: action.payload,
      })
    case 'SET_USER_WA':
      return ({
        ...state,
        whatsapp: action.payload,
      })
    default:
      return state;
  }
}

export default userData;