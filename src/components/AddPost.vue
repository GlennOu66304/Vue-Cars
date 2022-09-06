<template>
  <div class="post-form mb-3">
    <!-- placeholder -->
    <div class="card card-info">
      <div class="card-header bg-info text-white">
        说点啥
      </div>
      <!-- textArea -->
      <!-- submit button -->
      <form @submit.prevent="submit" autocomplete="off">
        <TextArea
          type="text"
          placeholder="随便写点啥"
          v-model="text"
          :errors="errors.text"
        />
        <input type="submit" class="btn btn-dark" />
      </form>

      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
import TextArea from "./TextArea.vue";
export default {
  name: "AddPost",
  data() {
    return {
      text: "",
      errors: [],
    };
  },
  methods: {
    submit() {
      const user = this.$store.getters.user;
      const newPost = {
        text: this.text,
        name: user.name,
        user: user.id,
      };
      this.$axios
        .post("/api/post", newPost)
        .then((res) => {
          this.errors = {};
          this.text = "";
          console.log(res.data);
          this.$emit("update");
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
      // console.log(this.msgInfo)
    },
  },

  components: {
    TextArea,
  },
};
</script>

<style></style>
