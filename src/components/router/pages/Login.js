import React from 'react'
import { string, func } from 'prop-types'
import styled from 'styled-components'
import Zone from '../../ui/Zone'
import InputText from '../../ui/input/InputText'
import InputPassword from '../../ui/input/InputPassword'
import { backgroundColors, fontColors } from '../../../app/layoutConfig'

const Login = ({ path, onLogin }) => {
  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <InputText type="text" placeholder="username"/>
        <InputPassword type="Password" placeholder="password"/>
        <LoginButton onClick={onLogin}>Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  )
}

const LoginContainer = styled(Zone)`
  text-align: center;
  margin: 10% auto auto;
  width: 300px;
`
const LoginTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  margin: 20px;
`
const LoginForm = styled.div`
line-height: 50px;
`
const LoginButton = styled.button`
  display: block;
  padding: 10px;
  margin: 20px auto auto;
  width: 180px;
  overflow: hidden;
  text-transform: uppercase;
  background: ${backgroundColors.primaryAlt};
  border: none;
  color: ${fontColors.primary};
  transition: 250ms ease all;
  &:active {
    transition: 100ms ease all;
    opacity: 0;
  }
  &:hover, &:focus, &:target {
    transition: 250ms ease all;
    background: ${backgroundColors.secondary};
    color: ${fontColors.secondaryAlt};
  }
`

Login.propTypes = {
  path: string,
  onLogin: func
}

export default (Login)
