import React, { useState } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ApplicationComponents from './pages/ApplicationComponents'

const Router = () => {
  const [isLogin, updateLoginState] = useState(false)
  const isConnected = () => {
    return isLogin
  }
  return (
    <BrowserRouter>
      <Switch>
        {
          (isConnected())
            ? <React.Fragment>
              <ApplicationComponents path="/application-components" />
              <Dashboard path="/" />
            </React.Fragment>
            : <React.Fragment>
              <Login onLogin={() => updateLoginState(true)}/>
            </React.Fragment>
        }
      </Switch>
    </BrowserRouter>
  )
}

export default Router
