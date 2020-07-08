<template>
  <div class="scrollmenu">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <i class="fa fa-search search white-text"></i>
    <a v-for="category in categories" :key="category.id" href="#home"
      >{category.name}</a
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  computed: {},
};
</script>
