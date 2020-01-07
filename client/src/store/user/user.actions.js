export const handleUserRegistration = (e) => {
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

const setUserName = (data) => {
  return {
    type: 'SET_USER_NAME',
    payload: data
  }
}

const setUserTower = (data) => {
  return {
    type: 'SET_USER_TOWER',
    payload: data
  }
}

const setUserUnit = (data) => {
  return {
    type: 'SET_USER_UNIT',
    payload: data
  }
}

const setUserEmail = (data) => {
  return {
    type: 'SET_USER_EMAIL',
    payload: data
  }
}

const setUserWhatsapp = (data) => {
  return {
    type: 'SET_USER_WA',
    payload: data
  }
}