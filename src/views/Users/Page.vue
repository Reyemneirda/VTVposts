<template>
  <div class="home">
    <ArticlePreview
      v-for="article in articles"
      :key="article.slug"
      :article="article"
    ></ArticlePreview>
  </div>
</template>

<script>
import ArticlePreview from "@/components/Articles/ArticlePreview";
import articleServices from "@/services/ArticleServices";
export default {
  name: "Home",
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    this.articles = await articleServices.fetchArticles(
      this.$store.getters["users/username"]
    );
  },
};
</script>
