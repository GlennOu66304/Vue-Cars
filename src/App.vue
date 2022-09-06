<template>
  <div id="app">
    <!-- @1 base page 1. map area -->
    <Amap2 />

    <!-- @2 second layer 2 is the cars data -->
   <Cars/>
    <!-- @3 third layer is route page -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import store from "./store/index.js";
import Amap2 from "./components/Amap2.vue";
import Cars from "./components/Cars.vue";
export default {
  name: "App",
  // jwt decode:
  data() {
    return {
      loading: false,
    };
  },

  // 1.page start
  created() {
    if (localStorage.jwt_token) {
      const decode = jwt_decode(localStorage.jwt_token);
      // console.log(decode.exp);
      const currentTime = Date.now() / 1000;

      // expire time lesson than current time,means the token is expire, the current time is bigger than expire time
      if (decode.exp < currentTime) {
        // 4.dispath the true or false to the store
        store.dispatch("setAuthentication", false);
        // 3.dipath the user information to the store
        store.dispatch("setUser", {});
        this.$router.push("/login");
      } else {
        // 4.dispath the true or false to the store
        store.dispatch("setAuthentication", !this.isEmpty(decode));
        // 3.dipath the user information to the store
        store.dispatch("setUser", decode);
      }
    }
  },

  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    },
  },
  components: {
    Amap2,
    Cars
  },
};
</script>

<style></style>
