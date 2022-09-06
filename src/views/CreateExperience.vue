<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
          <h1 class="display-4 text-center">添加个人经历</h1>
          <p class=" lead text-center">有关于工作的任何经验</p>
          <small class="d-block pb-3">* 表示必填项</small>
        </div>
      </div>
      <form @submit.prevent="submit" autocomplete="off">
        <TextField
          type="text"
          name="title"
          placeholder="* 工作内容"
          v-model="msgInfo.title"
          :errors="errors.title"
          class="textfield"
        ></TextField>

        <TextField
          type="text"
          name="company"
          placeholder="* 公司"
          v-model="msgInfo.company"
          :errors="errors.company"
          class="textfield"
        ></TextField>

        <TextField
          type="text"
          name="location"
          placeholder="地点"
          v-model="msgInfo.location"
          :errors="errors.location"
          class="textfield"
        ></TextField>

        <h6>开始时间</h6>
        <TextField
          type="date"
          name="from"
          v-model="msgInfo.from"
          :errors="errors.from"
        ></TextField>

        <h6>结束时间</h6>
        <TextField
          type="date"
          name="to"
          v-model="msgInfo.to"
          :errors="errors.to"
          :disabled="msgInfo.current"
        ></TextField>

        <div class="form-check mb-4">
          <input
            class="form-check-input"
            type="checkbox"
            name="current"
            v-model="msgInfo.current"
            id="current"
          />
          <label class="form-check-label" for="current">
            当前在职
          </label>
        </div>

        <TextArea
          placeholder="工作描述"
          name="description"
          v-model="msgInfo.description"
          :errors="errors.description"
          info="其他工作职责等"
        ></TextArea>
        <input type="submit" class="btn btn-info btn-block mt-4" />
        <!-- The button classes can be used on <a>, <button>, or <input> elements: -->
        <!--   <input type="submit" class="btn btn-info" value="提交"> -->
      </form>
    </div>
  </div>
</template>

<script>
import TextField from "../components/TextField.vue";
import TextArea from "../components/TextArea.vue";

export default {
  name: "CreateExperience",
  data: () => {
    return {
      errors: {},
      info: "",
      msgInfo: {
        title: "",
        company: "",
        location: "",
        description: "",
        from: "",
      },
      displaySocialInputs: false,
    };
  },

  methods: {
    submit() {
      this.$axios
        .post("/api/profile/experience", this.msgInfo)
        .then((res) => {
          this.errors = {};
          // this.$store.dispatch("setProfile", res.data);
          this.msgInfo = res.data
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.errors = err.response.data;
          // console.log(err.response.data)
        });
      // console.log(this.msgInfo)
    },
  },
  components: {
    TextField,
    TextArea,
  },
};
</script>

<style>
.textfield{
  margin-bottom: 15px;
}
</style>
