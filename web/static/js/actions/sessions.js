import { routeActions } from 'redux-simple-router'
import Constants from '../constants'
import { httpGet, httpPost } from '../utils'

function setCurrentUser (dispatch, user) {
  dispatch({
    type: Constants.CURRENT_USER,
    currentUser: user
  })
}

const Actions = {
  signIn (email, password) {
    return dispatch => {
      const data = {
        session: {
          email,
          password
        }
      }

      httpPost('/api/v1/sessions', data)
      .then(data => {
        localStorage.setItem('phoenixAuthToken', data.jwt)
        setCurrentUser(dispatch, data.user)
        dispatch(routeActions.push('/'))
      })
      .catch(error => {
        error.response.json()
        .then(errorJSON => dispatch({
          type: Constants.SESSIONS_ERROR,
          error: errorJSON.error
        }))
      })
    }
  },

  fetchCurrentUser () {
    return dispatch =>
      httpGet('/api/v1/current_user')
      .then(data => setCurrentUser(dispatch, data))
      .catch(error => {
        console.log(error)
        dispatch(routeActions.push('/sign_in'))
      })
  }
}

export default Actions
