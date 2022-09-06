<template>
  <!-- Landing -->
  <div class="landing">
    <div class="dark-overlay landing-inner text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-3 mb-4">米修在线</h1>
            <p class="lead">专注于线上教育, 用心做课程, 用心做服务!</p>
            <hr />
            <router-link
              v-show="!isLogin"
              to="/signup"
              class="btn btn-lg btn-info mr-2"
              >注册</router-link
            >
            <router-link
              v-show="!isLogin"
              to="/login"
              class="btn btn-lg btn-light"
              >登录</router-link
            >
            
              <!-- <a
                @click.prevent="logout"
                v-show="isLogin"
                class="nav-link"
                to="/login"
                >退出</a
              > -->
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
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
};
</script>

<style>
img {
  width: 100%;
}

.landing {
  position: relative;
  background: url("../assets/showcase.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-top: -24px;
  margin-bottom: -50px;
}

.landing-inner {
  padding-top: 80px;
}

.dark-overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-form {
  opacity: 0.9;
}

.latest-profiles-img {
  width: 40px;
  height: 40px;
}

.form-control::placeholder {
  color: #bbb !important;
}
</style>
