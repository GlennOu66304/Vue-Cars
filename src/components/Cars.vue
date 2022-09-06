<template>
  <div class="post-form mb-3">
    <h2>This is the Cars Data</h2>
  </div>
</template>

<script>

export default {
  name: "Cars",
  data() {
    return {
   
    };
  },
  props: {
   
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

  components: {},

};
</script>

<style>

</style>
