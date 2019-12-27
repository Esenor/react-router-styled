import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import VerticalMenu from './VerticalMenu'
import MainContent from './MainContent'

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <VerticalMenu/>
      <MainContent>
        { children }
      </MainContent>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
`

DefaultLayout.propTypes = {
  children: object
}

export default DefaultLayout
