<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">米修在线</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- profile , login, register section  -->
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/allprofiles"> 开发者 </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link v-show="!isLogin" class="nav-link" to="/signup"
              >注册</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-show="!isLogin" class="nav-link" to="/login"
              >登录</router-link
            >
          </li>
<!-- comment -->
          <li class="nav-item">
            <router-link v-show="isLogin" class="nav-link" to="/comments"
              >留言</router-link
            >
          </li>

           <li class="nav-item">
            <router-link v-show="isLogin" class="nav-link" to="/dashboard"
              >DashBoard</router-link
            >
          </li>

          <li class="nav-item">
            <a @click.prevent="logout" v-show="isLogin" class="nav-link" to="/login"
              >退出</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    isLogin() {
      if (this.$store.getters.authenticate) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods:{
    logout(){
      localStorage.removeItem("jwt_token");
      this.$store.dispatch("clearState")
      // this.$store.dispatch("setAuthentication",false);
      // this.$store.dispatch("setUser",{})
      this.$router.push('/login');
    }
  }
};
</script>

<style>
/* .headerImg {
  width: 25px;
  margin-right: 5px;
} */
</style>
