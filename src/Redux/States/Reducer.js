import { SET_USER_TOKEN, SET_USER_USERNAME, LOGOUT_HANDLE } from './Types'

const initialState = {
  token: '',
  username: ''
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case SET_USER_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case LOGOUT_HANDLE:
      return {
        ...state,
        username: '',
        token: ''
      }

    default:
      return state
  }
}

export default Reducer
