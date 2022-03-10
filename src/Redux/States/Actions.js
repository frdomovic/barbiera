import { SET_USER_TOKEN, SET_USER_USERNAME, LOGOUT_HANDLE } from './Types'

const setTokenRequest = token => {
  return {
    type: SET_USER_TOKEN,
    payload: token
  }
}

export const setUserToken = token => {
  return dispatch => {
    dispatch(setTokenRequest(token))
  }
}
const setUsernameRequest = username => {
  return {
    type: SET_USER_USERNAME,
    payload: username
  }
}
export const setUserName = username => {
  return dispatch => {
    dispatch(setUsernameRequest(username))
  }
}

const setLogoutRequest = () => {
  return {
    type: LOGOUT_HANDLE
  }
}

export const setLogout = () => {
  return dispatch => {
    dispatch(setLogoutRequest())
  }
}
