import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Router from './components/router/Router'
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
  color: #424242;
  background: #F2F3F7;
  height: 100%;
  padding: 0px;
  margin: 0px;
`
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    background: #F2F3F7;
  }
`

export default App
