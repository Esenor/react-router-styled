import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Router from './components/router/Router'
import { backgroundColors, fontColors } from './app/skin'
import './styles/reset.css'

const App = () => {
  return (
    <MainFragment>
      <GlobalStyle/>
      <Router/>
    </MainFragment>
  )
}

const MainFragment = styled.section`
  font-family: arial;
  color: ${fontColors.primary};
  background: ${backgroundColors.primaryAlt};
  height: 100%;
  padding: 0px;
  margin: 0px;
`
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    background: ${backgroundColors.primaryAlt};
  }
`

export default App
