import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ApplicationComponents from './pages/ApplicationComponents'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ApplicationComponents path="/application-components"/>
        <Dashboard path="/"/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
