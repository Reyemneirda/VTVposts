<template>
  <div class="container">
    <div class="row p-3 my-5">
      <div class="col s6 offset-s4">
        <div class="card">
          <div class="card-content">
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error.message }}</li>
            </ul>
            <input v-model="username" id="username" type="text" class="validate" />
            <label for="username">Username or email</label>
            <input v-model="password" id="password" type="password" class="validate" />
            <label for="password">Password</label>
          </div>

          <div class="card-action">
            <a @click="login" href="#">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      username: "",
      errors: []
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("users/loginUser", {
          username: this.username,
          password: this.password
        })
        .then(() => (this.errors = []))
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>
