import { put, call, takeLatest } from 'redux-saga/effects';
import { validateEmail, validatePhone, formatPhone } from '../../helpers/form';
import rsf from '../../configs/firebase.config';
import Swal from 'sweetalert2';

import {
  setUserName,
  setUserTower,
  setUserUnit,
  setUserEmail,
  setUserWhatsapp,
  setUserRegistrationLoadingStatus,
  emptyErrorMessage,
  emailFormatErrorMessage,
  phoneFormatErrorMessage,
  setUserNameInputErrorMessage,
  setUserTowerInputErrorMessage,
  setUserUnitInputErrorMessage,
  setUserEmailInputErrorMessage,
  setUserWAInputErrorMessage,
} from './user.actions';

function* handleUserRegisterInput(e) {
  let target = e.payload.target
  let inputId = target.id
  let value = target.value
  
  if (inputId === 'name') {
    yield put(setUserName(value))
  } else if (inputId === 'tower') {
    yield put(setUserTower(value))
  } else if (inputId === 'unit') {
    yield put(setUserUnit(value))
  } else if (inputId === 'email') {
    yield put(setUserEmail(value))
  } else if (inputId === 'phone') {
    yield put(setUserWhatsapp(value))
  }
}

function* handleUserRegisterSubmission(data) {
  let { e, name, tower, unit, email, whatsapp } = data.payload
  e.preventDefault();

  yield put(setUserRegistrationLoadingStatus(true))
    
  // form validation
  let formValidationResult = yield userRegistrationFormValidation(data.payload)
 
  if (formValidationResult) {
    let newUser = {
      name,
      tower,
      unit,
      email,
      whatsapp: formatPhone(whatsapp, 'E.164')
    }

    const doc = yield call(rsf.firestore.addDocument, 'owners', newUser)

    if (doc.id) {
      // clear form
      yield put(setUserName(""))
      yield put(setUserTower(""))
      document.getElementById("tower").selectedIndex = 0;
      yield put(setUserUnit(""))
      yield put(setUserEmail(""))
      yield put(setUserWhatsapp(""))
      // remove loading status
      yield put(setUserRegistrationLoadingStatus(false))
      //sweetalert successful
      Swal.fire({
        title: 'Pendaftaran Berhasil !',
        text: 'Admin kami akan segera menghubungi Anda.',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }
  } else {
    yield put(setUserRegistrationLoadingStatus(false))
  }
}

function* userRegistrationFormValidation(data) {
  let { name, tower, unit, email, whatsapp } = data

  let validationStatus = false
  let isEmailValid = validateEmail(email)
  let isPhoneValid = validatePhone(whatsapp)
  
  // name and tower and unit (and email and phone) can't be empty
  // validate email and phone using 3rd party library
  // ERROR VALIDATION
  if (name.length <= 0) {
    yield put(setUserNameInputErrorMessage(emptyErrorMessage))
  }

  if (tower.length <= 0) {
    yield put(setUserTowerInputErrorMessage(emptyErrorMessage))
  }

  if (unit.length <= 0) {
    yield put(setUserUnitInputErrorMessage(emptyErrorMessage))
  }

  if (email.length <= 0) {
    yield put(setUserEmailInputErrorMessage(emptyErrorMessage))
  }

  if (email.length > 0 && !isEmailValid) {
    yield put(setUserEmailInputErrorMessage(emailFormatErrorMessage))
  }

  if (whatsapp.length <= 0) {
    yield put(setUserWAInputErrorMessage(emptyErrorMessage))
  }

  if (whatsapp.length > 0 && !isPhoneValid.status) {
    yield put(setUserWAInputErrorMessage(phoneFormatErrorMessage))
  }

  // SUCCESSFUL VALIDATION
  if (name.length > 0) {
    yield put(setUserNameInputErrorMessage(""))
  }

  if (tower.length > 0) {
    yield put(setUserTowerInputErrorMessage(""))
  }

  if (unit.length > 0) {
    yield put(setUserUnitInputErrorMessage(""))
  }

  if (email.length > 0 && isEmailValid) {
    yield put(setUserEmailInputErrorMessage(""))
  }

  if (whatsapp.length > 0 && isPhoneValid.status) {
    yield put(setUserWAInputErrorMessage(""))
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

export default function* watchUserSaga() {
  yield takeLatest('HANDLE_USER_REG_INPUT', handleUserRegisterInput)
  yield takeLatest('HANDLE_USER_REG_SUB', handleUserRegisterSubmission)
}