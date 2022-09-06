<template>
  <div>
    <AddPost @update="getAllComments" />
    <LoadPosts
      
      v-for="(item, index) in comments"
      :key="index"
      :comment="item"
      @update="getAllComments"
      :showAction="true"
    />
  </div>
</template>

<script>
import AddPost from "../components/AddPost.vue";
import LoadPosts from "../components/LoadPosts.vue";
export default {
  name: "Posts",
  data() {
    return {
      comments: [],
      errors: {},
    };
  },
  // created load the comment data or beforeRouterEnter
  // then use it in the html section
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getAllComments();
    });
  },

  methods: {
    getAllComments() {
      this.$axios
        .get("/api/post")
        .then((res) => {
          this.errors = {};
          this.comments = res.data;

          // console.log(this.comments);
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
    },
  },
  components: {
    AddPost,
    LoadPosts,
  },
};
</script>

<style></style>
