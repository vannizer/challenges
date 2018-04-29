import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { init } from './utils/api'
import './main-css'

init()

render(<App />, document.getElementById('root'))
