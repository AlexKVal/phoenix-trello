import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setDocumentTitle, renderError } from '../../utils'
import Actions from '../../actions/sessions'

class SessionsNew extends React.Component {
  constructor (...args) {
    super(...args)

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidMount () {
    setDocumentTitle('Sign in')
  }

  _handleSubmit (e) {
    e.preventDefault()

    const { email, password } = this.refs
    const { dispatch } = this.props

    dispatch(Actions.signIn(email.value, password.value))
  }

  render () {
    return (
      <div className='view-container sessions new'>
        <main>
          <header>
            <div className='logo' />
          </header>
          <form onSubmit={this._handleSubmit}>
            {renderError(this.props.error)}
            <div className='field'>
              <input ref='email' type='email' placeholder='Email' required />
            </div>
            <div className='field'>
              <input ref='password' type='password' placeholder='Password' required />
            </div>
            <button type='submit'>Sign in</button>
          </form>
          <Link to='/sign_up'>Create new account</Link>
        </main>

      </div>
    )
  }
}

SessionsNew.propTypes = {
  error: PropTypes.string,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => state.session

export default connect(mapStateToProps)(SessionsNew)
