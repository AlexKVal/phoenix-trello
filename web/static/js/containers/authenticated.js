import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'

import Actions from '../actions/sessions'
import Header from '../layouts/header'

class AuthenticatedContainer extends React.Component {
  componentDidMount () {
    const { dispatch, currentUser } = this.props
    const phoenixAuthToken = localStorage.getItem('phoenixAuthToken')

    if (phoenixAuthToken && !currentUser) {
      dispatch(Actions.fetchCurrentUser())
    } else if (!phoenixAuthToken) {
      dispatch(routeActions.push('/sign_in'))
    }
  }

  render () {
    const { currentUser, dispatch } = this.props

    if (!currentUser) return false

    return (
      <div className='application-container'>
        <Header
          currentUser={currentUser}
          dispatch={dispatch}
        />

        <div className='main-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

AuthenticatedContainer.propTypes = {
  children: PropTypes.node,
  currentUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps)(AuthenticatedContainer)
