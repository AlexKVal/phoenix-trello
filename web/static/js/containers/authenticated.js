import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'

class AuthenticatedContainer extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    if (localStorage.getItem('phoenixAuthToken')) {
      //
    } else {
      dispatch(routeActions.push('/sign_up'))
    }
  }

  render () {
    //
  }
}

AuthenticatedContainer.propTypes = {
  currentUser: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = () => {}

export default connect(mapStateToProps)(AuthenticatedContainer)
