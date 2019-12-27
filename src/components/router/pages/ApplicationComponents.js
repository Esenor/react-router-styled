import React from 'react'
import { Route } from 'react-router-dom'
import { string } from 'prop-types'
import DefaultLayout from '../../layout/DefaultLayout'
import Zone from '../../ui/Zone'

const ApplicationComponents = ({ path }) => {
  return (
    <Route path={path}>
      <DefaultLayout>
        <React.Fragment>
          <Zone>
            <h1>ApplicationComponents</h1>
          </Zone>
          <Zone>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim posuere, sodales lorem sit amet, rutrum justo. Pellentesque ut congue augue, nec hendrerit quam. Nunc finibus congue imperdiet. Vivamus justo justo, feugiat quis dapibus vitae, accumsan sed dolor. Fusce pharetra ex in nisl posuere viverra. Duis interdum finibus mi, non bibendum tellus dapibus vitae. Suspendisse diam arcu, aliquam id tellus nec, molestie finibus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu tincidunt magna.</p>
            <p>Suspendisse laoreet lectus non sapien lacinia efficitur. Mauris euismod sem et enim accumsan elementum. Donec eleifend ex sit amet purus tempor consequat. Praesent sollicitudin ac est non accumsan. Praesent porttitor eu ligula vel mollis. Donec a tortor gravida, gravida quam at, ullamcorper neque. Etiam porttitor justo id libero ultricies sodales. Etiam consectetur bibendum nunc a ultrices. Phasellus pharetra erat pellentesque neque aliquam, ac lacinia sem fringilla. Etiam ac elit lacus. Pellentesque commodo risus vel euismod dapibus. Donec bibendum diam ac ultricies consequat. Praesent iaculis iaculis tellus. Cras vel odio est. Etiam ac turpis in nisl lacinia iaculis.</p>
          </Zone>
          <Zone>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim posuere, sodales lorem sit amet, rutrum justo. Pellentesque ut congue augue, nec hendrerit quam. Nunc finibus congue imperdiet. Vivamus justo justo, feugiat quis dapibus vitae, accumsan sed dolor. Fusce pharetra ex in nisl posuere viverra. Duis interdum finibus mi, non bibendum tellus dapibus vitae. Suspendisse diam arcu, aliquam id tellus nec, molestie finibus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu tincidunt magna.</p>
            <p>Curabitur ac consectetur tortor. Aliquam fermentum, dolor in cursus molestie, ligula est sagittis ipsum, et vestibulum urna arcu ut nulla. Donec nec semper dolor. Etiam purus urna, volutpat ac dignissim ac, facilisis at odio. Nulla ullamcorper risus tellus, et vehicula elit facilisis id. Integer porta purus vitae suscipit sagittis. Nulla vehicula urna quis pulvinar ultricies. Suspendisse potenti. Nulla maximus velit sit amet nisl aliquet ultrices. Mauris nec neque quis nisl luctus porttitor.</p>
            <p>Sed euismod lorem in turpis posuere faucibus. Nulla a venenatis eros. Aenean urna enim, dictum vitae semper vitae, tincidunt ut tellus. Ut cursus et est et pretium. Sed malesuada sed nisi vestibulum mattis. Phasellus nunc ante, fringilla vel dignissim a, varius sagittis ipsum. Nunc velit odio, facilisis ac euismod sit amet, vestibulum ac nibh. Aliquam vel massa mollis, cursus odio sed, fermentum odio. Donec euismod vel nulla vitae facilisis. Nam scelerisque risus quis congue rhoncus. Ut sed nibh ultricies, volutpat mi vel, accumsan augue. Nulla efficitur nec tortor sed eleifend. Nullam vehicula metus nec est interdum euismod. Ut eleifend urna ac metus faucibus, eget facilisis risus sagittis.</p>
          </Zone>
        </React.Fragment>
      </DefaultLayout>
    </Route>
  )
}

ApplicationComponents.propTypes = {
  path: string
}

export default (ApplicationComponents)
