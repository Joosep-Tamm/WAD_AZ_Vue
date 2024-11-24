<template>
  <div class="post-card">
    <div class="post-header">
      <img :src="post.profile_picture" alt="Profile Picture" class="profile-pic" />
      <span class="post-date">{{ post.post_date }}</span>
    </div>
    <p class="post-body">{{ post.body }}</p>
    <img v-if="post.image" :src="post.image" :alt="post.image_alt" class="post-image" />
    <div class="post-footer">
      <button @click="likePost" class="like-button">👍</button>
      <span class="like-count">{{ post.likes }} Likes</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  postId: Number
  },
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    },
    post() {
      for (const p of this.posts) {
        if (p.id === this.postId) {
          return p;
        }
      }
      return null;
    }
  },
  methods: {
    likePost() {
      const postId = this.post.id;
      this.$store.dispatch('incrementLikes', { postId: postId });      
    },
  },
};
</script>

<style scoped>

</style>
