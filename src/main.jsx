import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import store from './redux/store.js';
import App from './App.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
