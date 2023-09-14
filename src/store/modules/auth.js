// import * as api from '../../api'

// export default {
//   namespaced: true,
//   actions: {
//     async getToken () {
//       try {
//         const { data } = await api.auth.getToken()
//         const token = data.token
//         localStorage.setItem('token', token)
//         return data.token
//       } catch (e) {
//         alert('Возникла ошибка при загрузке страницы')
//       }
//     },
//     logout () {
//       localStorage.removeItem('token')
//       window.location.reload()
//     }
//   }
// }
