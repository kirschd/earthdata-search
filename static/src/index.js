/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'

import './css/main.scss'

import App from './js/App'
import './js/util/polyfill'

if (process.env.NODE_ENV === 'development' && module.hot) module.hot.accept()

const rootElement = document.getElementById('root')
const appElement = document.getElementById('app')

if (rootElement) {
  ReactDOM.render(
    <App />,
    appElement,
    () => {
      window.requestAnimationFrame(() => {
        // Start to fade the loading screen
        rootElement.classList.add('root--loading-fade')

        // Remove the loading classes after the animation completes
        setTimeout(() => {
          rootElement.classList.remove('root--loading')
          rootElement.classList.remove('root--loading-fade')
        }, 150)
      })
    }
  )
}
