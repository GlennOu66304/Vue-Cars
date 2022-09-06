<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>

    <Footer />
    <!-- this compoenn show only the v-show the loading is true -->
        <Loading v-show="loading"/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
// import Landing from "./components/Landing.vue";
import Footer from "./components/Footer.vue";
import jwt_decode from "jwt-decode";
import store from "./store/index.js";

import Loading from "./components/Loading.vue"
export default {
  name: "App",
  // jwt decode:
data(){
  return {
    loading:false
  }

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
        this.$router.push('/login')
      }else{
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
    Nav,
    Footer,
    Loading
  },
};
</script>

<style></style>
