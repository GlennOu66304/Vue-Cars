<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
          <h1 class="display-4 text-center">添加教育经历</h1>
          <p class=" lead text-center">填写您的资料，让我们更多的了解您</p>
          <small class="d-block pb-3">* 表示必填项</small>
        </div>
      </div>
      <form @submit.prevent="submit" autocomplete="off">
        <TextField
          type="text"
          name="school"
          placeholder="* 学校或培训"
          v-model="msgInfo.school"
          :errors="errors.school"
          class="textfield"
        ></TextField>

        <TextField
          type="text"
          name="degree"
          placeholder="* 学历"
          v-model="msgInfo.degree"
          :errors="errors.degree"
          class="textfield"
        ></TextField>

        <TextField
          type="text"
          name="fieldofstudy"
          placeholder="专业"
          v-model="msgInfo.fieldofstudy"
          :errors="errors.fieldofstudy"
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
            当前在校
          </label>
        </div>

        <TextArea
          placeholder="在校表现"
          name="description"
          v-model="msgInfo.description"
          :errors="errors.description"
          info="说说你在学习过程的经历"
        ></TextArea>

        <input type="submit" class="btn btn-info btn-block mt-4"  />
      </form>
    </div>
  </div>
</template>

<script>
import TextField from "../components/TextField.vue";

import TextArea from "../components/TextArea.vue";

export default {
  name: "CreateEducation",
  data: () => {
    return {
      errors: {
        school: "",
        degree: "",
        fieldofstudy: "",
        description: "",
        from: "",
        to:"",
     

      },
      info: "",
      msgInfo: {
        school: "",
        degree: "",
        fieldofstudy: "",
        description: "",
        from: "",
        to:"",
        current:false,
      },

      displaySocialInputs: false,
    };
  },

  methods: {
    submit() {
      this.$axios
        .post("/api/profile/education", this.msgInfo)
        .then((res) => {
          this.errors = {};
         this.msgInfo = res.data
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.errors = err.response.data;
          // console.log(this.errors)
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

<style></style>
