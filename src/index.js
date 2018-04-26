import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { add } from './helpers'
import { init } from './utils/api'
import './main-css'

const store = createStore(function(state, action) {
  const _state =
    state == null
      ? {
        donate: 0,
        latestDonations: {},
        message: '',
      }
      : state

  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return {
        ..._state,
        donate: add(_state.donate, action.amount),
        latestDonations: {
          amount: action.amount,
          currency: action.currency,
        },
      }

    default:
      return _state
  }
})

init()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
