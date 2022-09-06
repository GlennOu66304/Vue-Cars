<template>
  <div>
    <!-- go back section -->
    <div class="row">
      <div class="col-6">
        <a class="btn btn-light mb-3 float-left" @click.prevent="$router.go(-1)"
          >返回</a
        >
      </div>
    </div>
    <LoadPosts :comment="comment" :showAction="false" />
    <AddFollowComment
      :comment_id="comment._id"
     @update="getComment(comment._id)"
    />
    <LoadFollowComments
      v-for="(item, index) in comment.comments"
      :key="index"
      :comment="item"
      :comment_id="comment._id"
      @update="getComment(comment._id)"
    />
  </div>
</template>

<script>
import LoadPosts from "../components/LoadPosts.vue";

import AddFollowComment from "../components/AddFollowComment.vue";

import LoadFollowComments from "../components/LoadFollowComments.vue";
export default {
  name: "Comment",
  data() {
    return {
      comment: {},
      errors: {},
    };
  },
  // created load the comment data or beforeRouterEnter
  // then use it in the html section
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getComment(to.params.id);
    });
  },

  methods: {
    getComment(id) {
      this.$axios
        .get(`/api/post/${id}`)
        .then((res) => {
          this.errors = {};
          this.comment = res.data;

          console.log(this.comment);
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
    },
  },
  components: {
    LoadPosts,
    AddFollowComment,
    LoadFollowComments,
  },
};
</script>

<style></style>
