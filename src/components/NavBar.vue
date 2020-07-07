<template>
  <nav>
    <div class="nav-wrapper white">
      <router-link to="/" class="brand-logo grey-text text-darken-4">Home</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="sass.html" class="grey-text text-darken-4">New Post</a>
        </li>
        <li>
          <router-link to="/settings" class="grey-text text-darken-4">Settings</router-link>
        </li>
        <li v-if="!username">
          <router-link to="/login" class="grey-text text-darken-4">Login</router-link>
        </li>
        <li v-if="!username">
          <router-link to="/register" class="grey-text text-darken-4">Sign up</router-link>
        </li>
        <li v-if="username">
          <router-link :to="`/@${username}`" class="grey-text text-darken-4">
            <div class="chip">{{username}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters["users/username"];
    }
  }
};
</script>