import styled from 'styled-components'
import { backgroundColors } from '../../app/layoutConfig'

const defineBackground = type => {
  switch (type) {
    default:
      return backgroundColors.primaryAlt
  }
}

const Tag = styled.span`
  margin: 2px;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
  text-transform: lowercase;
  background: ${defineBackground(props => props.type)};
`

export default Tag
