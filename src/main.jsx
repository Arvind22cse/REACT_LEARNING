import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cla from './Class.jsx'
import Propvalidation from './Propvalidation.jsx'
import Api from './Api.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
  <React.StrictMode> 
  <App name="Arvind"/>
  <Cla name="Arvind"/>
  <Propvalidation/>
  <Api/>
  </React.StrictMode> 
    </>

)
