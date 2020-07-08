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
};
</script>
