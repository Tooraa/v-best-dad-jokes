<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <h3>
        <h3>Jokes you might enjoy</h3>
        <ul>
          <li :key="related.id" v-for="related in relatedPosts">
            <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">{{related.title}}</nuxt-link>
          </li>
        </ul>
      </h3>
    </aside>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: `Welcome to DAD joke land - ${post.title}`,
      meta: [
        { name: `twitter:title", content: "Welcome to DAD joke land - ${post.title}"`},
        { name: `twitter:description", content: "Best Dad jokes on the internet - ${post.content}"` },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  created(){
  },
  computed: {
    ...mapState('posts',['jokes']),


    post() {
      console.log(this.jokes);
      return this.jokes.find(post => post.id === this.id);
    },
    relatedPosts() {
      return this.$store.state.jokes.all.filter(post => post.id !== this.id);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>