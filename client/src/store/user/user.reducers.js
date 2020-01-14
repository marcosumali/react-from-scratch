let initialState = {
  name: '',
  nameInputErrorMessage: '',
  tower: '',
  towerInputErrorMessage: '',
  unit: '',
  unitInputErrorMessage: '',
  email: '',
  emailInputErrorMessage: '',
  whatsapp: '',
  whatsappInputErrorMessage: '',
  isRegistrationLoading: false,
}

const userData = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return ({
        ...state,
        name: action.payload,
      })
    case 'SET_USER_NAME_INPUT_ERROR_MESSAGE':
      return ({
        ...state,
        nameInputErrorMessage: action.payload,
      })
    case 'SET_USER_TOWER':
      return ({
        ...state,
        tower: action.payload,
      })
    case 'SET_USER_TOWER_INPUT_ERROR_MESSAGE':
      return ({
        ...state,
        towerInputErrorMessage: action.payload,
      })
    case 'SET_USER_UNIT':
      return ({
        ...state,
        unit: action.payload,
      })
    case 'SET_USER_UNIT_INPUT_ERROR_MESSAGE':
      return ({
        ...state,
        unitInputErrorMessage: action.payload,
      })
    case 'SET_USER_EMAIL':
      return ({
        ...state,
        email: action.payload,
      })
    case 'SET_USER_EMAIL_INPUT_ERROR_MESSAGE':
      return ({
        ...state,
        emailInputErrorMessage: action.payload,
      })
    case 'SET_USER_WA':
      return ({
        ...state,
        whatsapp: action.payload,
      })
    case 'SET_USER_WA_INPUT_ERROR_MESSAGE':
      return ({
        ...state,
        whatsappInputErrorMessage: action.payload,
      })
    case 'SET_REGISTER_LOADING_STATUS':
      return ({
        ...state,
        isRegistrationLoading: action.payload,
      })
    default:
      return state;
  }
}

export default userData;