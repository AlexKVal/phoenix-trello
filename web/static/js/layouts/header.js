import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ReactGravatar from 'react-gravatar'

import Actions from '../actions/sessions'

class Header extends React.Component {
  constructor (...args) {
    super(...args)

    this._renderCurrentUser = this._renderCurrentUser.bind(this)
    this._renderSignOutLink = this._renderSignOutLink.bind(this)
    this._handleSignOutClick = this._handleSignOutClick.bind(this)
  }

  _renderCurrentUser () {
    const { currentUser } = this.props

    if (!currentUser) return false

    const fullName = `${currentUser.first_name} ${currentUser.last_name}`

    return (
      <a className='current-user'>
        <ReactGravatar email={currentUser.email} https /> {fullName}
      </a>
    )
  }

  _renderSignOutLink () {
    if (!this.props.currentUser) return false

    return (
      <a href='#' onClick={this._handleSignOutClick}>
        <i className='fa fa-sign-out'> Sign out</i>
      </a>
    )
  }

  _handleSignOutClick (e) {
    e.preventDefault()

    this.props.dispatch(Actions.signOut())
  }

  render () {
    return (
      <header className='main-header'>
        <nav>
          <ul>
            <li>
              <Link to='/'><i className='fa fa-columns'> Boards</i></Link>
            </li>
          </ul>
        </nav>
        <Link to='/'>
          <span className='logo' />
        </Link>
        <nav className='right'>
          <ul>
            <li>
              {this._renderCurrentUser()}
            </li>
            <li>
              {this._renderSignOutLink()}
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
}

export default Header
