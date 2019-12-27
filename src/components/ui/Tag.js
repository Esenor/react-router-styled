import styled from 'styled-components'

const defineBackground = type => {
  switch (type) {
    case 'orange':
      return 'coral'
    default:
      return '#EAEAEA'
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
