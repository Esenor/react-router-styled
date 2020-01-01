import React, { useState } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Placeholder from './pages/Placeholder'

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
              <Placeholder path="/artifacts"><p>/artifacts</p></Placeholder>
              <Placeholder path="/assets"><p>/assets</p></Placeholder>
              <Placeholder path="/docker-images"><p>/docker-images</p></Placeholder>
              <Placeholder path="/libraries"><p>/libraries</p></Placeholder>
              <Dashboard path={['/', '/map']} />
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
