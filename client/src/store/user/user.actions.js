import { validateEmail, validatePhone, formatPhone } from '../../helpers/form';
import Swal from 'sweetalert2';

export const emptyErrorMessage = 'Please fill in.';
export const emailFormatErrorMessage = 'Please provide a valid email.';
export const phoneFormatErrorMessage = 'Please provide a valid whatsapp number.';

export const handleUserRegistrationInput = (e) => {
  return (dispatch) => {
    let target = e.target
    let inputId = target.id
    let value = target.value

    if (inputId === 'name') {
      dispatch(setUserName(value))
    } else if (inputId === 'tower') {
      dispatch(setUserTower(value))
    } else if (inputId === 'unit') {
      dispatch(setUserUnit(value))
    } else if (inputId === 'email') {
      dispatch(setUserEmail(value))
    } else if (inputId === 'phone') {
      dispatch(setUserWhatsapp(value))
    }
  }
}

export const handleUserRegisterAction = (data) => {
  return {
    type: 'HANDLE_USER_REG_INPUT',
    payload: data
  }
}

export const setUserName = (data) => {
  return {
    type: 'SET_USER_NAME',
    payload: data
  }
}

export const setUserTower = (data) => {
  return {
    type: 'SET_USER_TOWER',
    payload: data
  }
}

export const setUserUnit = (data) => {
  return {
    type: 'SET_USER_UNIT',
    payload: data
  }
}

export const setUserEmail = (data) => {
  return {
    type: 'SET_USER_EMAIL',
    payload: data
  }
}

export const setUserWhatsapp = (data) => {
  return {
    type: 'SET_USER_WA',
    payload: data
  }
}


export const handleUserRegistrationSubmission = (e, name, tower, unit, email, whatsapp) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    e.preventDefault();
    dispatch(setUserRegistrationLoadingStatus(true))
    
    // form validation
    let formValidationResult = dispatch(userRegistrationFormValidation(name, tower, unit, email, whatsapp))

    if (formValidationResult) {
      let newUser = {
        name,
        tower,
        unit,
        email,
        whatsapp: formatPhone(whatsapp, 'E.164')
      }

      let firestore = getFirestore()
      let userRef = firestore.collection('owners')

      userRef
        .add(newUser)
        .then(docRef => {
          // clear form
          dispatch(setUserName(""))
          dispatch(setUserTower(""))
          dispatch(setUserUnit(""))
          dispatch(setUserEmail(""))
          dispatch(setUserWhatsapp(""))
          // remove loading status
          dispatch(setUserRegistrationLoadingStatus(false))
          //sweetalert successful
          Swal.fire({
            title: 'Pendaftaran Berhasil !',
            text: 'Admin kami akan segera menghubungi Anda.',
            icon: 'success',
            confirmButtonText: 'OK'
          })      
        })
        .catch(err => {
          console.log('ERROR: register', err)
        })
    } else {
      dispatch(setUserRegistrationLoadingStatus(false))
    }
  }
}

export const handleUserRegisterSubmission = (data) => {
  return {
    type: 'HANDLE_USER_REG_SUB',
    payload: data
  }
}

export const setUserRegistrationLoadingStatus = (data) => {
  return {
    type: 'SET_REGISTER_LOADING_STATUS',
    payload: data
  }
}

export const userRegistrationFormValidation = (name, tower, unit, email, whatsapp) => {
  return (dispatch) => {
    let validationStatus = false
    let isEmailValid = validateEmail(email)
    let isPhoneValid = validatePhone(whatsapp)
    
    // name and tower and unit (and email and phone) can't be empty
    // validate email and phone using 3rd party library
    // ERROR VALIDATION
    if (name.length <= 0) {
      dispatch(setUserNameInputErrorMessage(emptyErrorMessage))
    }

    if (tower.length <= 0) {
      dispatch(setUserTowerInputErrorMessage(emptyErrorMessage))
    }

    if (unit.length <= 0) {
      dispatch(setUserUnitInputErrorMessage(emptyErrorMessage))
    }

    if (email.length <= 0) {
      dispatch(setUserEmailInputErrorMessage(emptyErrorMessage))
    }

    if (email.length > 0 && !isEmailValid) {
      dispatch(setUserEmailInputErrorMessage(emailFormatErrorMessage))
    }

    if (whatsapp.length <= 0) {
      dispatch(setUserWAInputErrorMessage(emptyErrorMessage))
    }

    if (whatsapp.length > 0 && !isPhoneValid.status) {
      dispatch(setUserWAInputErrorMessage(phoneFormatErrorMessage))
    }

    // SUCCESSFUL VALIDATION
    if (name.length > 0) {
      dispatch(setUserNameInputErrorMessage(""))
    }

    if (tower.length > 0) {
      dispatch(setUserTowerInputErrorMessage(""))
    }

    if (unit.length > 0) {
      dispatch(setUserUnitInputErrorMessage(""))
    }

    if (email.length > 0 && isEmailValid) {
      dispatch(setUserEmailInputErrorMessage(""))
    }

    if (whatsapp.length > 0 && isPhoneValid.status) {
      dispatch(setUserWAInputErrorMessage(""))
    }

    // UPDATE VALIDATION STATUS
    if (
      name.length > 0 &&
      tower.length > 0 &&
      unit.length > 0 &&
      email.length > 0 &&
      isEmailValid &&
      whatsapp.length > 0 &&
      isPhoneValid.status
    ) {
      validationStatus = true
    }

    return validationStatus
  }
}

export const setUserNameInputErrorMessage = (data) => {
  return {
    type: 'SET_USER_NAME_INPUT_ERROR_MESSAGE',
    payload: data
  }
}

export const setUserTowerInputErrorMessage = (data) => {
  return {
    type: 'SET_USER_TOWER_INPUT_ERROR_MESSAGE',
    payload: data
  }
}

export const setUserUnitInputErrorMessage = (data) => {
  return {
    type: 'SET_USER_UNIT_INPUT_ERROR_MESSAGE',
    payload: data
  }
}

export const setUserEmailInputErrorMessage = (data) => {
  return {
    type: 'SET_USER_EMAIL_INPUT_ERROR_MESSAGE',
    payload: data
  }
}

export const setUserWAInputErrorMessage = (data) => {
  return {
    type: 'SET_USER_WA_INPUT_ERROR_MESSAGE',
    payload: data
  }
}
