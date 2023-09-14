<template>
  <div class="reviews">
    <div class="toggler">
      <toggler @onToggle="toggle" :isShow="showingToggle"/>
    </div>
    <comment-placeholder v-if="loading" />
    <div
      class="comments"
      v-if="showingToggle"
    >
      <ul class="comments-list">
        <li class="comments-item" v-for="issue in issues" :key="issue.id">
          <Comment :username="issue.user.login" :text="issue.title" />
        </li>
      </ul>
    </div>
    <div class="date">{{ humanReadableDate }}</div>
  </div>
</template>

<script>
import toggler from '../../components/toggler/toggler.vue'
import Comment from '../../components/comment/comment.vue'
import commentPlaceholder from '../commentPlaceholder/commentPlaceholder.vue'
import { ref } from 'vue'

export default {
  components: {
    toggler,
    commentPlaceholder,
    Comment
  },
  emits: ['loadContent'],
  props: {
    loading: {
      type: Boolean
    },
    date: {
      type: Date
    },
    issues: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const showingToggle = ref(false)

    const toggle = () => {
      showingToggle.value = !showingToggle.value

      if (showingToggle.value && props.issues.length === 0) {
        emit('loadContent')
      }
    }
    return {
      showingToggle,
      toggle
    }
  },
  computed: {
    humanReadableDate () {
      const date = new Date(this.date)
      return date.toLocaleString('en-EN', { month: 'short', day: 'numeric' })
    }
  }
}
</script>

<style src="./comments.scss" lang="scss" scoped></style>
