import md5 from 'md5'

const authorizedCredentials = [
  {
    username: '21232f297a57a5a743894a0e4a801fc3',
    password: '21232f297a57a5a743894a0e4a801fc3'
  },
  {
    username: 'acbd18db4cc2f85cedef654fccc4a4d8',
    password: '37b51d194a7513e45b56f6524f2d51f2'
  }
]

export function isAuthorized (username, password) {
  return typeof authorizedCredentials.find((authorizedCredential) => {
    return authorizedCredential.username === md5(username) && authorizedCredential.password === md5(password)
  }) !== 'undefined'
}
