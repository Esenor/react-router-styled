import React from 'react'
import { string, func } from 'prop-types'
import OneLineStringInput from './OneLineStringInput'

const InputText = ({ placeholder = '', onChange = () => {} }) => {
  return (
    <OneLineStringInput type="text" placeholder={placeholder} onChange={onChange}/>
  )
}

InputText.propTypes = {
  placeholder: string,
  onChange: func
}

export default InputText
