import styled from 'styled-components'
import DefaultNavLink from './DefaultNavLink'
import { fontColors } from '../../../app/layoutConfig'

const CurrentNavLink = styled(DefaultNavLink)`
  color: ${fontColors.secondaryAlt};
  font-weight: bold;
`

export default CurrentNavLink
