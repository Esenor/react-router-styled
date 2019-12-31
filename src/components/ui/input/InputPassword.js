import React from 'react'
import { string } from 'prop-types'
import { OneLinetringInput } from '../../../styledComponents/input'

const InputPassword = ({ placeholder = '' }) => {
  return (
    <OneLinetringInput type="password" placeholder={placeholder} />
  )
}

InputPassword.propTypes = {
  placeholder: string
}

export default InputPassword
