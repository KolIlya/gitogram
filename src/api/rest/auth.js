import { makeRequest } from '../requests'
import env from '../../env'

export const getToken = () => {
  const code = new URLSearchParams(window.location.search).get('code')
  if (code) {
    return makeRequest({
      url: 'https://webdev-api.loftschool.com/github',
      method: 'post',
      data: {
        clientId: env.clientId,
        clientSecret: env.clientSecret,
        code
      }
    })
  }
}
