import React from 'react'
import { Route } from 'react-router-dom'
import { array, string, object, oneOfType } from 'prop-types'
import DefaultLayout from '../../layout/DefaultLayout'
import Zone from '../../ui/container/Zone'

const Placeholder = ({ path, children }) => {
  return (
    <Route path={ path }>
      <DefaultLayout>
        <React.Fragment>
          <Zone>
            <h1>Placeholder</h1>
          </Zone>
          <Zone>
            {children}
          </Zone>
        </React.Fragment>
      </DefaultLayout>
    </Route>
  )
}

Placeholder.propTypes = {
  path: oneOfType([
    string, array
  ]),
  children: oneOfType([
    object, array
  ])
}

export default (Placeholder)
