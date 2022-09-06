// to understand the bootstrape code, you need to paste them into the // code
pen, to test it // is-invalid is responsible for the redline of the input box //
invalid-feedback is responsible for the redline of the text
<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <!-- text above -->
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>

          <!-- v-model bind the data -->
          <!-- username -->
          <form @submit.prevent="submit" autocomplete="off" method="post">
            <!-- username -->
            <div class="form-group">
              <TextField
                type="text"
                name="name"
                placeholder="用户名"
                v-model="newUser.name"
                :errors="errors.name"
              />
             
            </div>
            <!-- wmail -->
            <div class="form-group">
              <TextField
                type="email"
                name="email"
                placeholder="邮箱地址"
                info="我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱"
                v-model="newUser.email"
                :errors="errors.email"
              />

             
            </div>

            <!-- password -->
            <div class="form-group">
              <TextField
                type="password"
                name="password"
                placeholder="密码"
                v-model="newUser.password"
                :errors="errors.password"
              />
            </div>
            <!-- passowrd2 -->
            <div class="form-group">
              <TextField
                type="password"
                name="password2"
                placeholder="确认密码"
                v-model="newUser.password2"
                :errors="errors.password2"
              />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "../components/TextField.vue";
export default {
  name: "SignUp",
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
      },
      errors: "",
    };
  },

  // test user:  jason jason@163.com 123456 123456
  // methods
  methods: {
    submit() {
      this.$axios .post("/api/signup", this.newUser)
        .then((res) => {
          // console.log(res.data);

          this.$store.dispatch("setUser", {
            email:res.data.email,
            name:res.data.name,
            id:res.data._id
          });

          this.$router.push("/login");
          // this.errors = {}
        })
        .catch((err) => {
          this.errors = err.response.data; // assing the new value
          // console.log(this.errors); // console.log(this.errors) data into the console to knwo the data status
        });
    },
  },
  components: {
    TextField,
  },
};
</script>

<style></style>
