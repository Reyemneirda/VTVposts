<template>
  <div class="row article-preview">
    <div class="col s12">
      <router-link :to="`/article/${article.slug}`" class="preview-link">
        <h3>{{ article.title }}</h3>
        <div class="info">
          <a href="">{{ article.author.username }}</a>
          <span class="date">{{ formatDate(article.createdAt) }}</span>
        </div>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["article"],
  methods: {
    formatDate(dateString) {
      return moment(dateString).format("MMMM Do, YYYY");
    },
  },
};
</script>
