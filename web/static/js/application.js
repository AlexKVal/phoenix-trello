import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import configureStore from './store'
import Root from './containers/root'

const store = configureStore(browserHistory)

ReactDOM.render(
  <Root routerHistory={browserHistory} store={store} />,
  document.getElementById('root_container')
)
