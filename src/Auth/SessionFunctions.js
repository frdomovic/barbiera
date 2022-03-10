export const setWorkerSession = (token, user) => {
  sessionStorage.setItem('token', token)
  sessionStorage.setItem('username', JSON.stringify(user))
}
export const setAdminSession = (token, user, status) => {
  sessionStorage.setItem('token', token)
  sessionStorage.setItem('username', JSON.stringify(user))
  sessionStorage.setItem('admin', JSON.stringify(status))
}
export const getAdminStatus = () => {
  return sessionStorage.getItem('admin') || null
}
export const getToken = () => {
  return sessionStorage.getItem('token') || null
}
export const getUsername = () => {
  return sessionStorage.getItem('username') || null
}
export const removeUserSession = () => {
  sessionStorage.clear()
}
