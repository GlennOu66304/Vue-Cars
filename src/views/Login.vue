// change the axios reues with header has token

<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">使用已有的账户登录</p>
          <!-- <form @submit.prevent="submit" autocomplete="off" method="post"> -->

          <!-- form -->
          <form @submit.prevent="submit" autocomplete="off">
            <!-- email -->
            <div class="form-group">
              <!-- don't need to add the two dots when parent component send props to the child component-->

              <TextField
                type="email"
                placeholder="邮箱地址"
                name="email"
                v-model="user.email"
                :errors="errors.email"
              />
            </div>
            <!-- password -->
            <div class="form-group">
              <TextField
                type="password"
                name="password"
                placeholder="密码"
                v-model="user.password"
                :errors="errors.password"
              />
              <input
                type="submit"
                class="btn btn-info btn-block mt-4"
               
               
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import TextField from "../components/TextField.vue";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  // login email content verify first // axios requests
  // methods
  methods: {
    submit() {
      // console.log(this.user)
      this.$axios
        .post("/api/signin", this.user)
        .then((res) => {
          // save the token into the localStorage
          window.localStorage.setItem("jwt_token", res.data.token);
          // console.log(res);
          // 1.decode the token ge the user information
          // 2.login page
          const decode = jwt_decode(localStorage.jwt_token);
          // console.log(decode);
          // 3.dipath the user information to the store
          this.$store.dispatch("setUser", decode);
          // 4.dispath the true or false to the store
          this.$store.dispatch("setAuthentication", !this.isEmpty(decode));
          // 4.push to the page /dashboard
          this.errors = {};
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.errors = err.response.data;
          console.log(err.response.data)
        })
    },

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
    TextField,
  },
};
</script>

<style></style>
