<template>
    <div class="c-repository">
      <h2 class="repository-title">{{ title }}</h2>
      <div class="repository-description">{{ description }}</div>
      <statistic class="statistic" :starsNumber="starsNumber" :forksNumber="forksNumber" />
    </div>
  </template>

<script>
import { statistic } from '../statistic'

export default {
  name: 'repository',
  components: {
    statistic
  },
  props: {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    starsNumber: {
      type: Number,
      required: true
    },
    forksNumber: {
      type: Number,
      required: true
    }
  }
}
</script>

  <style scoped lang="scss" src="./repository.scss"></style>
