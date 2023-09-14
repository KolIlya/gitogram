<template>
    <div class="c-feed">
        <h1>title: {{ title }}</h1>
        <h2>owner: {{ username }}</h2>
        <h3>stars: {{ stars }}</h3>
        <p v-if="description">description: {{ description }}</p>
    </div>
</template>

<script>
export default {
  name: 'repositoryUserItem',
  props: {
    title: String,
    username: String,
    stars: Number,
    description: String,
    dark: Boolean
  }
}
</script>
