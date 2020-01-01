import React from 'react'
import styled from 'styled-components'
import { object } from 'prop-types'

const MainContent = ({ children }) => {
  return (
    <Section>
      { children }
    </Section>
  )
}

const Section = styled.section`
  margin: 70px 20px 30px 20px;
  width: 100%;
`

MainContent.propTypes = {
  children: object
}

export default MainContent
