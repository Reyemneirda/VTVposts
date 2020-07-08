<template>
  <div class="home">
    <ul class="tabs">
      <li class="tab col s3">
        <a
          :class="{ active: activeFeed === 'user' }"
          v-if="username"
          @click="setArticleFeed('user')"
          >My Articles</a
        >
      </li>
      <li class="tab col s3">
        <a
          :class="{ active: activeFeed === 'global' }"
          @click="setArticleFeed('global')"
          >All Articles</a
        >
      </li>
    </ul>
    <ArticlePreview
      v-for="article in articles"
      :key="article.slug"
      :article="article"
    ></ArticlePreview>
  </div>
</template>

<script>
import ArticlePreview from "@/components/Articles/ArticlePreview";

export default {
  name: "Home",
  components: {
    ArticlePreview,
  },
  methods: {
    setArticleFeed(feedType) {
      if (feedType === "global") {
        this.activeFeed = "global";
        this.$store.dispatch("articles/getAllArticles");
      } else if (feedType === "user") {
        this.activeFeed = "user";
        this.$store.dispatch("articles/getUserArticles", {
          id: this.$store.state.users.user._id,
        });
      }
    },
  },
  created() {
    this.setArticleFeed("global");
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles || [];
    },
    username() {
      return this.$store.getters["users/username"];
    },
  },
  data() {
    return {
      activeFeed: "global",
    };
  },
};
</script>
