import React from 'react'
import { string, func } from 'prop-types'
import { OneLinetringInput } from '../../../styledComponents/input'

const InputText = ({ placeholder = '', onChange = () => {} }) => {
  return (
    <OneLinetringInput type="text" placeholder={placeholder} onChange={onChange}/>
  )
}

InputText.propTypes = {
  placeholder: string,
  onChange: func
}

export default InputText
