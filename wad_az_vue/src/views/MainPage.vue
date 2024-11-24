<template>
  <div class="main-page">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <UserPost :postId="post.id"/>
    </div>
    <button @click="resetLikes" class="reset-button">Reset All Likes</button>
  </div>
</template>

<script>
import UserPost from '@/components/UserPost.vue';

export default {
  components: {
    UserPost
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    resetLikes() {
      this.$store.dispatch('resetLikes'); // Dispatch action to reset all likes
    }
  },
};
</script>

