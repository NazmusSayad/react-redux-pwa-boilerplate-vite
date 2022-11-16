import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import className from 'classnames'
import './styles/index.scss'
import store from './store'
import App from './App'
import ErrorBoundary from '$components/ErrorBoundary'

window.cn = className
window.$store = store.dispatch

const rootElement = document.getElementById('Root')
const root = createRoot(rootElement)

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>
)
