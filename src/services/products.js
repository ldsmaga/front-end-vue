import { http } from './config'


export default {
  getProducts: () => {
    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }

    return http.get('product/show', config)
  },

  createProduct(product) {
    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.post('product/create', product, config)
  },

  deleteProduct(id) {
    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.delete('product/delete/' + id, config)
  },

  showProduct(id) {
    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.get('product/show/' + id, config)
  },

  editProduct(product, id) {
    let token = 'Bearer ' + localStorage.getItem('token')

    let config = {
      headers: {
        Authorization: token,
      }
    }
    return http.put('product/update/' + id, product, config)
  },
}