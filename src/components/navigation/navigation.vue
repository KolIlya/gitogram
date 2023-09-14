<template>
  <div class="user-info">
    <div class="home" @click="goToHome">
      <Icon name="home" />
    </div>
    <div class="user-photo" @click="goToUser">
      <img
        :src="src"
        class="img-avatar"
        :alt="`${username} avatar`"
      />
    </div>
    <div @click="logout" class="logout">
      <Icon name="logout" />
    </div>
  </div>
</template>

<script>
import Icon from '../../icons/icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    src: {
      type: String
    },
    username: {
      type: String
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    },
    goToHome () {
      this.$router.push('/')
    },
    goToUser () {
      this.$router.push('/user')
    }
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
