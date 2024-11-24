<template>
  <div class="main-page">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <div class="post-header">
        <img :src="post.profile_picture" alt="Profile Picture" class="profile-pic" />
        <span class="post-date">{{ post.post_date }}</span>
      </div>
      <p class="post-body">{{ post.body }}</p>
      <img v-if="post.image" :src="post.image" :alt="post.image_alt" class="post-image" />
      <div class="post-footer">
        <button @click="likePost(post.id)" class="like-button">👍</button>
        <span class="like-count">{{ post.likes }} Likes</span>
      </div>
    </div>
    <div class="reset-button-wrapper">
      <button @click="resetLikes" class="reset-button">Reset All Likes</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allPosts']),
    posts() {
      return this.allPosts;
    },
  },
  methods: {
    ...mapActions(['incrementLikes', 'resetLikes']),
    likePost(postId) {
      this.incrementLikes(postId);
    },
  },
};
</script>

