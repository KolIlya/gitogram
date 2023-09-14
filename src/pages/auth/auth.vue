<template>
  <div class="c-auth">
    <div class="auth-content">
      <div class="auth-logo">
        <icon name="logo" />
      </div>
      <div class="auth-info">
        <span class="auth-info-text">
          More than just one repository.
          <br>
          This is our digital world.
        </span>
      </div>
      <div class="auth-btn">
        <Xbutton @click="getToken">
          <span>Authorize with github</span>
          <span class="logo-icon"><icon name="gitLogo" /></span>
        </Xbutton>
      </div>
    </div>
  </div>
</template>

<script>
import Xbutton from '../../components/button/button.vue'
import Icon from '../../icons/icon.vue'
import env from '../../env.js'
// import { mapActions } from 'vuex'
export default {
  components: {
    Xbutton,
    Icon
  },
  methods: {
    getToken () {
      const apiUrl = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user')
      window.location.href = `${apiUrl}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch(
          'https://webdev-api.loftschool.com/github',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ clientId: env.clientId, code, clientSecret: env.clientSecret })
          }
        )
        const { token } = await response.json()
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
