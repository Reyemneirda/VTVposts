<template>
  <div id="app">
    <NavBar></NavBar>
    <Categories></Categories>

    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

import Categories from "@/components/Categories";

export default {
  components: {
    NavBar,

    Categories,
  },
};
</script>
