<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
          <h1 class="display-4 text-center">编辑个人资料</h1>
          <p class=" lead text-center">填写您的资料，让我们更多的了解您</p>
          <small class="d-block pb-3">* 表示必填项</small>
        </div>
      </div>
      <form @submit.prevent="submit" autocomplete="off">
        <TextField
          type="text"
          placeholder="* Profile handle"
          name="handle"
          :value="value"
          :errors="errors.handle"
          v-model="msgInfo.handle"
          info="此处的handle是在后端接口中需要用来查询数据的,通常是写你email的名字"
        />
        <Select
          name="status"
          :errors="errors.status"
          :value="value"
          :options="options"
          v-model="msgInfo.status"
          info="请告知我们您目前从事的职业"
        />

        <TextField
          type="text"
          placeholder="公司"
          name="company"
          :value="value"
          v-model="msgInfo.company"
          info="你目前就职的公司"
        />

        <TextField
          type="text"
          placeholder="网址"
          name="website"
          :value="value"
          v-model="msgInfo.website"
          info="您公司的网站"
        />

        <TextField
          type="text"
          placeholder="位置"
          name="location"
          :value="value"
          v-model="msgInfo.location"
          info="你所在的城市及所在区/例如.北京市昌平区）"
        />

        <TextField
          type="text"
          placeholder="编程语言技能"
          name="skills"
          :value="value"
          v-model="msgInfo.skills"
          info="请使用逗号隔开你所掌握的语言 HTML,CSS.JavaSeript.pHip"
        />

        <TextField
          type="text"
          placeholder="Github用户名"
          name="githubUsername"
          :value="value"
          v-model="msgInfo.githubusername"
          info="您的github用户名"
        />

        <TextArea
          type="textarea"
          placeholder="自我介绍"
          name="请介绍一下您自己"
          :value="value"
          :errors="errors.bio"
          info="简要介绍一下您自己"
          v-model="msgInfo.bio"
        />
        <div class="mb-3">
          <button
            type="button"
            class="btn btn-light"
            @click="displaySocialInputs = !displaySocialInputs"
          >
            添加社交账号
          </button>
          <span class="text-muted">选项</span>

          <Social
            v-show="displaySocialInputs"
            placeholder="米修在线"
            name="wangyikt"
            v-model="msgInfo.wechat"
            :value="value"
            icon="fab fa-weixin"
          />

          <Social
            v-show="displaySocialInputs"
            placeholder="QQ"
            name="wangyikt"
            v-model="msgInfo.QQ"
            :value="value"
            icon="fab fa-qq"
          />

          <Social
            v-show="displaySocialInputs"
            placeholder="腾讯云课堂"
            name="wangyikt"
            :value="value"
            v-model="msgInfo.tengxunkt"
          />
          <Social
            v-show="displaySocialInputs"
            placeholder="网易云课堂"
            name="wangyikt"
            :value="value"
            v-model="msgInfo.wangyikt"
          />
        </div>

        <input type="submit" class="btn btn-info btn-block mt-4" />
      </form>
    </div>
  </div>
</template>

<script>
import TextField from "../components/TextField.vue";
import Select from "../components/Select.vue";
import TextArea from "../components/TextArea.vue";
import Social from "../components/Social.vue";

export default {
  name: "EditDashboard",
  data: () => {
    return {
      errors: {
        handle: "",

        status: "",
        skills: "",

        bio: "",
      },
      info: "",
      msgInfo: {
        handle: "",
        company: "",
        website: "",
        location: "",
        status: "",
        skills: "",
        githubUsername: "",
        bio: "",
        wechat: "",
        QQ: "",
        tengxunkt: "",
        wangyikt: "",
      },
      value: "",
      options: [
        { label: "0", value: "* 请选择您的职业" },
        { label: "Junior Developer", value: "前端初级工程师" },
        { label: "Senior Developer", value: "前端中级工程师" },
        { Label: "HighDeveloper", value: "前端高级工程师" },
        { label: "Manager", valu: "前端管理" },
        { label: "backend Developer", value: "后端开发" },
        { label: "Python machine learning", value: "Python机器学习" },
      ],
      displaySocialInputs: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      
      vm.getCurrentProfile();
    });
  },
  methods: {
    // define a function, then load the function in the beforeRouteEnter
    getCurrentProfile() {
      // get the profile data from the vuex
      let profile = this.$store.getters.profile;
      // console.log(profile)
      // then defien if it has value,not then assgin it to the ""
      profile.handle = profile.handle ? profile.handle : "";
      profile.skills = profile.skills ? profile.skills.join(',') :"",
      this.msgInfo = profile
      // console.log(this.msgInfo)

    },
    submit() {
      // console.log(this.msgInfo)
      this.$axios
        .post("/api/profile", this.msgInfo)
        .then((res) => {
          this.errors = {};
          this.$store.dispatch("setProfile", res.data);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
      // console.log(this.msgInfo)
    },
  },
  components: {
    TextField,
    Select,
    TextArea,
    Social,
  },
};
</script>

<style></style>
