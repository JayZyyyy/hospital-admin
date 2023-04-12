import service from '../service/axios'

export function login(username, password) {
  return service({
    method: 'post',
    url: '/login',
    params: {
      username,
      password
    }
  }).then((res) => {
    return res.data
  })
}
