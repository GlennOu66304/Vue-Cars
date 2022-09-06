<template>
  <div class="commentfeed">
    <!-- Post Item -->
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-2">
          <a href="profile.html">
            <img
              style="width:150px"
              class="rounded-circle d-nonse d-md-block"
              src="../assets/logo.png"
              alt=""
            />
          </a>
          <br />
          <p class="text-center" v-if="comment">{{ comment.name }}</p>
        </div>
        <div class="col-md-10">
          <p class="lead" v-if="comment">{{ comment.text }}</p>

          <button
            @click="deleteClick(comment._id)"
            v-if="user != null || user == comment.user"
            type="button"
            class="btn btn-danger mr-1"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadFollowComments",
  // show the delete option when the comment is created by the curent handler
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  props: {
    comment :Object,
    comment_id :String
  },
  methods: {
    deleteClick(id) {
      this.$axios
        .delete(`/api/post/comment/${this.comment_id}/${id}`)
        .then((res) => {
          console.log(res);
          this.$emit("update");
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
    },

  },
};
</script>

<style></style>
