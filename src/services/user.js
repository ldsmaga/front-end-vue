import { http } from './config'


export default {

  create(user) {
    return http.post('user/create', user)
  },

  update(user) {

    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.put('user/update', user, config)
  },


  delete() {
    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.delete('user/delete', config)
  },

  me() {

    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.get('auth/me', config)
  }
}