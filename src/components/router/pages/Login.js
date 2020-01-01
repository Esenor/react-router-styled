import React, { useState } from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import Zone from '../../ui/container/Zone'
import InputText from '../../ui/input/InputText'
import InputPassword from '../../ui/input/InputPassword'
import { backgroundColors, fontColors } from '../../../app/skin'
import { isAuthorized } from '../../../app/authentication'

const Login = ({ onLogin }) => {
  const [credentials, updateCredentials] = useState({
    usernameInput: '',
    passwordInput: ''
  })
  const updateUsernameInput = event => updateCredentials({ ...credentials, ...{ usernameInput: event.target.value } })
  const updatePasswordInput = event => updateCredentials({ ...credentials, ...{ passwordInput: event.target.value } })
  const validate = (event) => {
    event.preventDefault()
    if (isAuthorized(credentials.usernameInput, credentials.passwordInput)) {
      onLogin()
      return true
    } else {
      window.alert('Invalid credential')
      return false
    }
  }
  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={validate}>
        <InputText type="text" placeholder="Username" onChange={updateUsernameInput} value={credentials.usernameInput}/>
        <InputPassword type="Password" placeholder="Password" onChange={updatePasswordInput} value={credentials.passwordInput}/>
        <LoginButton>Login</LoginButton>
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
const LoginForm = styled.form`
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
  onLogin: func
}

export default (Login)
