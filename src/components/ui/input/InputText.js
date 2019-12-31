import React from 'react'
import { string } from 'prop-types'
import { OneLinetringInput } from '../../../styledComponents/input'

const InputText = ({ placeholder = '' }) => {
  return (
    <OneLinetringInput type="text" placeholder={placeholder}/>
  )
}

InputText.propTypes = {
  placeholder: string
}

export default InputText
