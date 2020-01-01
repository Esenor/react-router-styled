const menuItems = [
  {
    code: 'overviewSection',
    label: 'Overview',
    items: [
      {
        code: 'map',
        label: 'Map',
        path: '/'
      },
      {
        code: 'applicationComponents',
        label: 'Application components',
        path: '/application-components'
      }
    ]
  },
  {
    code: 'applicationComponentsSection',
    label: 'Components type',
    items: [
      {
        code: 'artifacts',
        label: 'Artifacts',
        path: '/artifacts'
      },
      {
        code: 'assets',
        label: 'Assets',
        path: '/assets'
      },
      {
        code: 'dockerImage',
        label: 'Docker image',
        path: '/docker-images'
      },
      {
        code: 'libraries',
        label: 'Libraries',
        path: '/libraries'
      }
    ]
  }
]

export const getMenuItems = () => menuItems
