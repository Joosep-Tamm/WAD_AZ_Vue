import { createStore } from 'vuex';

export default createStore({
    state: {
        posts: [
      {
        userId: 1,
        id: 1,
        likes: 0,
        post_date: "Sep 22, 2024",
        profile_picture: require('@/images/profile.jpg'),
        image: require('@/images/tartu2024.jpg'),
        image_alt: "Tartu 2024!",
        body: "Tartu 2024!"
      },
      {
        userId: 1,
        id: 2,
        likes: 0,
        post_date: "Sep 18, 2024",
        profile_picture: require('@/images/profile.jpg'),
        body: "Anyone knows in which room is the lab today?"
      },
      {
        userId: 1,
        id: 3,
        likes: 0,
        post_date: "Aug 30, 2024",
        profile_picture: require('@/images/profile.jpg'),
        image: require('@/images/wad.jpg'),
        image_alt: "I love #WebApplicationDevelopment!",
        body: "I love #WebApplicationDevelopment!"
      },
      {
        userId: 1,
        id: 4,
        likes: 0,
        post_date: "Aug 15, 2024",
        profile_picture: require('@/images/profile.jpg'),
        body: "Welcome to the new semester! Excited to see you all!"
      },
      {
        userId: 1,
        id: 5,
        likes: 0,
        post_date: "Oct 22, 2024",
        profile_picture: require('@/images/profile.jpg'),
        image: require('@/images/sunset.jpg'),
        image_alt: "Sunset by the lake today was beautiful.",
        body: "Sunset by the lake today was beautiful."
      },
      {
        userId: 1,
        id: 6,
        likes: 0,
        post_date: "Sep 12, 2024",
        profile_picture: require('@/images/profile.jpg'),
        body: "No one told me I would need to learn JavaScript!!!"
      },
      {
        userId: 1,
        id: 7,
        likes: 0,
        post_date: "Aug 6, 2024",
        profile_picture: require('@/images/profile.jpg'),
        body: "Anyone else excited for another college year!?"
      },
      {
        userId: 1,
        id: 8,
        likes: 0,
        post_date: "Sep 26, 2024",
        profile_picture: require('@/images/profile.jpg'),
        image: require('@/images/ati.jpg'),
        image_alt: "It's ATI day!",
        body: "It's ATI day, which means you can meet and have a chat with all the ATI research groups!"
      },
      {
        userId: 1,
        id: 9,
        likes: 0,
        post_date: "Oct 1, 2024",
        profile_picture: require('@/images/profile.jpg'),
        body: "Does anyone have an ID card reader I could borrow?"
      },
      {
        userId: 1,
        id: 10,
        likes: 0,
        post_date: "Aug 20, 2024",
        profile_picture: require('@/images/profile.jpg'),
        body: "You know, I never noticed the Delta building had a robotics lab."
      },
      {
        userId: 1,
        id: 11,
        likes: 0,
        post_date: "Jul 4, 2024",
        profile_picture: require('@/images/profile.jpg'),
        image: require('@/images/america.jpg'),
        image_alt: "USA!",
        body: "Happy 4th of July everyone!"
      }
    ],
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.posts.find(p => p.id === postId);
            if (post) post.likes++;
        },
        resetLikes(state) {
            state.posts.forEach(post => (post.likes = 0));
        },
    },
    actions: {
        incrementLikes({ commit }, postId) {
            commit('incrementLikes', postId);
        },
        resetLikes({ commit }) {
            commit('resetLikes');
        },
    },
    getters: {
        allPosts: state => state.posts,
    },
});
