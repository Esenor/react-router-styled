import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fontColors } from '../../../app/layoutConfig'

const DefaultNavLink = styled(Link)`
  text-decoration: none;
  color: ${fontColors.secondary};
  text-transform: capitalize;
  font-size: 12px;
  margin: 4px;
  padding: 2px;
`

export default DefaultNavLink
