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
  name: "AddFollowComment",
  data() {
    return {
      text: "",
      errors: [],
    };
  },
  props: {
    comment_id:String,

  },
  methods: {
    submit() {
      const user = this.$store.getters.user;
      const newComment = {
        text: this.text,
        name: user.name,
        user: user.id,
      };
      this.$axios
        .post(`/api/post/comment/${this.comment_id}`, newComment)
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
