import React from 'react'
import fetch from 'isomorphic-fetch'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function parseJSON (response) {
  return response.json()
}

export function httpPost (url, data) {
  const headers = {
    Authorization: localStorage.getItem('phoenixAuthToken'),
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const body = JSON.stringify(data)

  return fetch(url, {
    method: 'post',
    headers,
    body
  })
  .then(checkStatus)
  .then(parseJSON)
}

export function renderError (error) {
  if (!error) return false

  return (
    <div className='error'>
      {error}
    </div>
  )
}

export function renderErrorsFor (errors, ref) {
  if (!errors) return false

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i} className='error'>
          {error[ref]}
        </div>
      )
    }
  })
}
