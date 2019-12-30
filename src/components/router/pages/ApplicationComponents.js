import React from 'react'
import { Route } from 'react-router-dom'
import { string } from 'prop-types'
import styled from 'styled-components'
import DefaultLayout from '../../layout/DefaultLayout'
import Zone from '../../ui/Zone'
import Containers from '../../ui/Containers'
import Container from '../../ui/Container'
import Tag from '../../ui/Tag'
import { fontColors } from '../../../app/layoutConfig'

const applicationComponents = [
  {
    code: 'serverDemo',
    name: 'Server demo',
    technologies: ['Node'],
    type: 'Docker image',
    normes: ['efc'],
    quality: ['test'],
    scopes: ['prod', 'staging'],
    rating: 3
  },
  {
    code: 'frontDemo',
    name: 'Front webapp',
    technologies: ['Node', 'React'],
    type: 'Asset',
    normes: ['efc'],
    quality: [],
    scopes: ['version'],
    rating: 3
  }
]

const ApplicationComponents = ({ path }) => {
  return (
    <Route path={path}>
      <DefaultLayout>
        <React.Fragment>
          <Zone>
            <h1>ApplicationComponents</h1>
          </Zone>
          <Zone>
            <p>Curabitur ac consectetur tortor. Aliquam fermentum, dolor in cursus molestie, ligula est sagittis ipsum, et vestibulum urna arcu ut nulla. Donec nec semper dolor. Etiam purus urna, volutpat ac dignissim ac, facilisis at odio. Nulla ullamcorper risus tellus, et vehicula elit facilisis id. Integer porta purus vitae suscipit sagittis. Nulla vehicula urna quis pulvinar ultricies. Suspendisse potenti. Nulla maximus velit sit amet nisl aliquet ultrices. Mauris nec neque quis nisl luctus porttitor.</p>
          </Zone>
          <Containers>
            { applicationComponents.map(component => (
              <Container key={component.code}>
                <Line>
                  <h3>{component.name}</h3>
                </Line>
                <Line>
                  <label>Technologies:</label>
                  {component.technologies.map((technology, key) => (
                    <Tag key={key} type="orange">{technology}</Tag>
                  ))}
                </Line>
                <Line>
                  <label>Type:</label>
                  <Tag>{component.type}</Tag>
                </Line>
                <Line>
                  <label>Normes:</label>
                  {component.normes.map((norme, key) => (
                    <Tag key={key}>{norme}</Tag>
                  ))}
                </Line>
                <Line>
                  <label>Quality:</label>
                  {component.quality.map((quality, key) => (
                    <Tag key={key}>{quality}</Tag>
                  ))}
                </Line>
                <Line>
                  <label>Scopes:</label>
                  {component.scopes.map((scope, key) => (
                    <Tag key={key}>{scope}</Tag>
                  ))}
                </Line>
              </Container>
            )) }
          </Containers>
        </React.Fragment>
      </DefaultLayout>
    </Route>
  )
}

const Line = styled.div`
  line-height: 25px;
  vertical-align: middle;
  & h3 {
    color: ${fontColors.primaryAlt};
    font-weight: bold;
  }
`

ApplicationComponents.propTypes = {
  path: string
}

export default (ApplicationComponents)
