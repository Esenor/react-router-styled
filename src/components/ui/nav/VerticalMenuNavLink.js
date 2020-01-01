import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { string } from 'prop-types'
import styled from 'styled-components'
import { fontColors } from '../../../app/skin'

const VerticalMenuNavLink = ({ path = '/', children = (<span>{path}</span>) }) => {
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

VerticalMenuNavLink.propTypes = {
  path: string,
  children: string
}

const DefaultNavLink = styled(Link)`
  text-decoration: none;
  color: ${fontColors.secondary};
  text-transform: capitalize;
  font-size: 12px;
  margin: 4px;
  padding: 2px;
`

const CurrentNavLink = styled(DefaultNavLink)`
  color: ${fontColors.secondaryAlt};
  font-weight: bold;
`

export default VerticalMenuNavLink
