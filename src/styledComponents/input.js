import styled from 'styled-components'
import { backgroundColors } from '../app/layoutConfig'

export const OneLinetringInput = styled.input`
  padding: 5px;
  border-radius: 2px;
  text-transform: capitalize;
  border: none;
  border-bottom: 2px solid ${backgroundColors.primaryAlt};
  transition: 250ms ease all;
  &:focus {
    border-bottom: 2px solid ${backgroundColors.secondary};
    transition: 250ms ease all;
  }
`
