import Constants from '../constants'

const initialState = {
  error: null,
  currentUser: null
}

export default function sessionReducer (state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_USER:
      return { ...state, currentUser: action.currentUser }

    case Constants.SESSIONS_ERROR:
      return { ...state, error: action.error }

    default:
      return state
  }
}
