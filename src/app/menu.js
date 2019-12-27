const menuItems = [
  {
    code: 'default',
    label: 'Repository',
    items: [
      {
        code: 'dashboard',
        label: 'Dashboard',
        path: '/'
      },
      {
        code: 'applicationComponents',
        label: 'Application components',
        path: '/application-components'
      }
    ]
  }
]

export const getMenuItems = () => menuItems
