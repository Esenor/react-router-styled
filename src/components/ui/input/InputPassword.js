import React from 'react'
import { string, func } from 'prop-types'
import { OneLinetringInput } from '../../../styledComponents/input'

const InputPassword = ({ placeholder = '', onChange = () => { } }) => {
  return (
    <OneLinetringInput type="password" placeholder={placeholder} onChange={onChange} />
  )
}

InputPassword.propTypes = {
  placeholder: string,
  onChange: func
}

export default InputPassword
