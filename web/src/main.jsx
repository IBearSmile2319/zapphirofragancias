import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import App from './App'
import store from './store'
import './index.css'
import 'antd/dist/antd.variable.min.css';
import { BrowserRouter } from 'react-router-dom'

ConfigProvider.config({
  theme: {
    primaryColor: '#9164cc',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  },
})
window.store = store
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
)
