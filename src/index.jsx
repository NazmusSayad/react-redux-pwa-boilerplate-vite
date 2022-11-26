import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from './store'
import ErrorBoundary from './ErrorBoundary'

import className from 'classnames'
window.cn = className

import './styles/index.scss'
import App from './App'

const rootElement = document.getElementById('Root')
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <ErrorBoundary element={<h1>Error</h1>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>
)
