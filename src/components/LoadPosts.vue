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
          <span v-if="showAction">
            <!-- like -->
            <button
              @click="like(comment._id)"
              type="button"
              class="btn btn-light mr-1"
            >
              <i class="text-info fas fa-thumbs-up"></i>
              <span class="badge badge-light" v-if="comment">{{
                comment.likes.length
              }}</span>
            </button>
            <!-- unlike -->
            <button
              @click="unlike(comment._id)"
              type="button"
              class="btn btn-light mr-1"
            >
              <i class="text-secondary fas fa-thumbs-down"></i>
            </button>

            <!-- <a href="post.html" class="btn btn-info mr-1">
            鼓励留言
          </a> -->

            <router-link
              class="btn btn-info mr-1"
              :to="`/comments/${comment._id}`"
              >鼓励留言</router-link
            >

            <button
              @click="deleteClick(comment._id)"
              v-if="user != null || user == comment.user"
              type="button"
              class="btn btn-danger mr-1"
            >
              <i class="fas fa-times"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadPosts",
  // show the delete option when the comment is created by the curent handler
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  props: {
    comment: Object,
    showAction: Boolean,
  },
  methods: {
    deleteClick(id) {
      this.$axios
        .delete(`/api/post/${id}`)
        .then((res) => {
          console.log(res);
          this.$emit("update");
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
    },
    like(id) {
      this.$axios
        .post(`/api/post/like/${id}`)
        .then((res) => {
          console.log(res);
          this.$emit("update");
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
    },
    unlike(id) {
      this.$axios
        .post(`/api/post/unlike/${id}`)
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
