import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { string } from 'prop-types'
import DefaultNavLink from './DefaultNavLink'
import CurrentNavLink from './CurrentNavLink'

const NavLink = ({ path = '/', children = (<span>{path}</span>) }) => {
  return (
    <Switch>
      <Route path={path} exact={true}>
        <CurrentNavLink to={path}>{children}</CurrentNavLink>
      </Route>
      <Route>
        <DefaultNavLink to={path}>{children}</DefaultNavLink>
      </Route>
    </Switch>
  )
}

NavLink.propTypes = {
  path: string,
  children: string
}

export default NavLink
