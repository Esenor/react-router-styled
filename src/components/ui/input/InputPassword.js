import React from 'react'
import { string, func } from 'prop-types'
import OneLineStringInput from './OneLineStringInput'

const InputPassword = ({ placeholder = '', onChange = () => { } }) => {
  return (
    <OneLineStringInput type="password" placeholder={placeholder} onChange={onChange} />
  )
}

InputPassword.propTypes = {
  placeholder: string,
  onChange: func
}

export default InputPassword
