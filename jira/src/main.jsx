import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from'./context/tasks'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider>
<App/>
   </Provider>
)
