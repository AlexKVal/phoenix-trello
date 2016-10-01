import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setDocumentTitle, renderErrorsFor } from '../../utils'
import Actions from '../../actions/registrations'

class RegistrationsNew extends React.Component {
  constructor (...args) {
    super(...args)

    this._handleSubmit = this._handleSubmit.bind(this)
  }
  componentDidMount () {
    setDocumentTitle('Sign up')
  }

  _handleSubmit (e) {
    e.preventDefault()

    const { dispatch } = this.props
    const { firstName, lastName, email, password, passwordConfirmation } = this.refs

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_comfirmation: passwordConfirmation.value
    }

    dispatch(Actions.signUp(data))
  }

  render () {
    const { errors } = this.props

    return (
      <div className='view-container registrations new'>
        <main>
          <header>
            <div className='logo' />
          </header>
          <form onSubmit={this._handleSubmit}>
            <div className='field'>
              <input ref='firstName' type='text' placeholder='First name' required />
              {renderErrorsFor(errors, 'first_name')}
            </div>
            <div className='field'>
              <input ref='firstName' type='text' placeholder='First name' required />
              {renderErrorsFor(errors, 'first_name')}
            </div>
            <div className='field'>
              <input ref='lastName' type='text' placeholder='Last name' required />
              {renderErrorsFor(errors, 'last_name')}
            </div>
            <div className='field'>
              <input ref='email' type='email' placeholder='Email' required />
              {renderErrorsFor(errors, 'email')}
            </div>
            <div className='field'>
              <input ref='password' type='password' placeholder='Password' required />
              {renderErrorsFor(errors, 'password')}
            </div>
            <div className='field'>
              <input ref='passwordConfirmation' type='password' placeholder='Confirm password' required />
              {renderErrorsFor(errors, 'password_comfirmation')}
            </div>
            <button type='submit'>Sign up</button>
          </form>
          <Link to='/sign_in'>Sign in</Link>
        </main>
      </div>
    )
  }
}

RegistrationsNew.propTypes = {
  errors: PropTypes.array,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors
})

export default connect(mapStateToProps)(RegistrationsNew)
