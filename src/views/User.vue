<template>
  <!-- Landing -->
  <div class="user">
    <!-- emap not elmp -->
    <h1>user page</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      if (this.$store.getters.authenticate) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("jwt_token");
      this.$store.dispatch("clearState");
      // this.$store.dispatch("setAuthentication",false);
      // this.$store.dispatch("setUser",{})
    },
  },
  components: {},
};
</script>

<style>

</style>
